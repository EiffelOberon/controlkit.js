import ControlKit from '../../../index';

window.addEventListener('load',()=>{
    const settings = {a : 0};

    new ControlKit().addPanel()
        .addNumber(settings,'a',{id : 'number',onChange : function(){
            console.log(this.value);
        }});
});