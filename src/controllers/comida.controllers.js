const dataComida  = require('../models/comida_aves');
const comidaCtrl = {};
const {suplementacion, fecha}  =require('../helpers/comidas');

//  1: renderiza los formularios para comida de aves
comidaCtrl.formularioComida = (req,res)=>{
    res.render('comida/formulariocomida')
}
//  2: renderiza la Data  comida aves los ultimos 5 dias
comidaCtrl.renderComidas = async(req,res)=>{
    const comidasPonedoras = await dataComida.find({ponedora_engorde:"ponedora"}).sort({$natural:-1}).limit(3).lean();
    const comidasEngorde = await dataComida.find({ponedora_engorde:"engorde"}).sort({$natural:-1}).limit(3).lean();
    try{
        suplementacion(comidasEngorde)
        fecha(comidasEngorde)
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
    console.log(newDataComida);
    await newDataComida.save()
    res.redirect('/comida')
}
// 4:
comidaCtrl.deleteEngorde = async (req,res)=>{
    console.log(req.params.id);
    let engordeId = req.params.id;
    await dataComida.findByIdAndDelete(engordeId,(err,docs)=>{
        if(err){
            console.log(err);
        }else{console.log("delete Comp. : ", docs);}
    })
    res.redirect("/registroscomida")
}
// 5: 
comidaCtrl.deletePonedora = async(req,res)=>{
    console.log(req.params.id);
    let ponedoraId = req.params.id
    await dataComida.findByIdAndDelete(ponedoraId,(err,docs)=>{
        if(err){
            console.log(err);
        }else{console.log("delete Comp: ",docs);}
    })
    res.redirect('/registroscomida')
}

//  6:Graficas con Chart Js para comida aves
comidaCtrl.graficosComidaAves = async (req,res)=>{
    res.render('comida/graficascomida')
}

module.exports = comidaCtrl;