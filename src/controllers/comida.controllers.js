const dataComida  = require('../models/comida_aves');
const comidaCtrl = {};
const {suplementacion, fecha, suplementacionArray, fechaColombia}  =require('../helpers/comidas');


//  1: renderiza los formularios para comida de aves
comidaCtrl.formularioComida = (req,res)=>{
    res.render('comida/formulariocomida')
}
//  2: renderiza la Data  comida aves los ultimos 3 dias
comidaCtrl.renderComidas = async(req,res)=>{
    const comidasPonedoras = await dataComida.find({ponedora_engorde:"ponedora"}).sort({$natural:-1}).limit(3).lean();
    const comidasEngorde = await dataComida.find({ponedora_engorde:"engorde"}).sort({$natural:-1}).limit(3).lean();
    console.log(comidasEngorde);
    try{
        suplementacion(comidasEngorde)
        fecha(comidasEngorde)
        suplementacion(comidasPonedoras)
        fecha(comidasPonedoras)
        res.render('comida/registroscomida',{comidasPonedoras,comidasEngorde})
    }catch(er){console.log(er);}
    
}
//  3: Recibe la Data de la comida de aves
comidaCtrl.createComida = async(req,res)=>{//post
    const {ponedora_engorde,
            masa_sobrante,
            masa_agregada,
            maiz,
            suero,
            forraje} = req.body;
    var suplementos = [maiz, suero, forraje];
    const newDataComida = new dataComida({ponedora_engorde,masa_agregada,masa_sobrante,suplementos});
    //console.log(newDataComida);
    await newDataComida.save()
    res.redirect('/comida')
}
// 4: borra comida por metodo delete un registro de comida engorde o ponedora
comidaCtrl.deleteComida = async (req,res)=>{
    //console.log(req.params.id);
    let avesId = req.params.id;
    await dataComida.findByIdAndDelete(avesId,(err,docs)=>{
        if(err){
            console.log(err);
        }else{console.log("delete Comp. : ", docs);}
    })
    res.redirect("/registroscomida")
}


//  5:Graficas con Chart Js para comida aves
comidaCtrl.graficosComidaAves = async (req,res)=>{
}

//  6: por POST actualizacion de datos para comida de aves
comidaCtrl.formularioActualizacionComida = async(req,res)=>{
    let {_id} = req.body
    const registroComida = await dataComida.findById(_id).lean()
    try{
        suplementacionArray(registroComida);
        res.render('comida/actualizarcomida',{registroComida})
    }catch(e){
        console.log(e);
    }
    
}

// 7: por PUT guarda datos cambiados en base de datos
comidaCtrl.actualizarComidaAves = async (req,res)=>{
    let {id} = req.params;
    let {masa_agregada,masa_sobrante,date,maiz,suero,forraje} = req.body ;
    var suplementos = [maiz, suero, forraje];
    await dataComida.findByIdAndUpdate(id,{masa_agregada:masa_agregada,
                                            masa_sobrante:masa_sobrante,
                                            suplementos:suplementos,
                                            date:date},(e,d)=>{
        if(e){
            console.log(e);
        }else{console.log("update Task: ",d);}
    })
    req.flash('success_msg','Registro comida ACTUALIZADO satisfactorimente')
    res.redirect("/registroscomida")
}



module.exports = comidaCtrl;