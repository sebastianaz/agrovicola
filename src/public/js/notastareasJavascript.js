// this is need for the Notes and Tasks's form register
Calendar.setup({
    inputField     :    "f_date_b",      // id of the input field
    ifFormat       :    " %b %e, %a, %Y [%I:%M %p]",       // format of the input field
    showsTime      :    true,            // will display a time selector
    button         :    "f_trigger_b",   // trigger for the calendar (button ID)
    singleClick    :    false,           // double-click mode
    step           :    1                 // show all years in drop-down boxes (instead of every other year as default)
});


Calendar.setup({
    inputField     :    "f__date_task",      // id of the input field
    ifFormat       :    " %b %e, %a, %Y [%I:%M %p]",       // format of the input field
    showsTime      :    true,            // will display a time selector
    button         :    "f_trigger_task",   // trigger for the calendar (button ID)
    singleClick    :    false,           // double-click mode
    step           :    1                 // show all years in drop-down boxes (instead of every other year as default)
});

