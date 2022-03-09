let JSON_CUENTO = {
    nombre:"El gato con botas",
    tipo:"Cuento de hadas",
    descripcion:"Adaptación libre basada en un relato oral atribuido a Charles Perrault en 1697 en su libro “Cuentos de antaño”. “El gato con botas” narra la historia de un hermano menor que recibe, como herencia de su padre, nada menos que un simple gato. Al principio se desilusiona de su suerte, pero pronto descubrirá que es el más afortunado de todos. El astuto gato será capaz de cambiar por completo la vida del joven teniendo sólo un par de botas y un saco. Descubre algunas de las aventuras que el gato con botas está dispuesto a recorrer, en favor de su joven amo.",
    creditos:[
                ["Adaptación:","Copec"],
                ["Ilustraciones:","Copec"],
                ["Narración:","Andrés Montero Labbé"],
//                ["Arreglos musicales:","Copec"],
                ["Edición a cargo de:","Copec"],
                ["Montaje y desarrollo web:","Agencia Match"],
                ["Créditos de sonidos:","Revise detalles <a href='#' target='_blank'>aquí</a>"] 
    ],
    ID:0, 
    imagenes:[
        "img/gato_con_botas/gato_con_botas_esc_0_fondo.jpg",
    ], 
    fx_sonido:[
        {nombre:"miau",url:"audio/gato_con_botas/fx/miau.mp3"},
        {nombre:"burro",url:"audio/gato_con_botas/fx/burro.mp3"},
        {nombre:"sorpresa",url:"audio/gato_con_botas/fx/sorpresa.mp3"},
        {nombre:"no_te_aflijas",url:"audio/gato_con_botas/fx/no_te_aflijas.mp3"},
        {nombre:"saco",url:"audio/gato_con_botas/fx/saco.mp3"},
        {nombre:"metete_al_rio",url:"audio/gato_con_botas/fx/metete_al_rio.mp3"},
        {nombre:"rio",url:"audio/gato_con_botas/fx/rio.mp3"},
        {nombre:"cabalgata",url:"audio/gato_con_botas/fx/cabalgataB.mp3"},
        {nombre:"caballito",url:"audio/gato_con_botas/fx/caballito.mp3"},
        {nombre:"snort",url:"audio/gato_con_botas/fx/snort.mp3"},
        {nombre:"magia",url:"audio/gato_con_botas/fx/magia.mp3"},
        {nombre:"beso",url:"audio/gato_con_botas/fx/beso.mp3"},
        {nombre:"musica_inicio",url:"audio/gato_con_botas/fx/musica_inicio.mp3"},
        {nombre:"fanfarria_real",url:"audio/gato_con_botas/fx/fanfarria_real.mp3"},
        {nombre:"hombre_pensativo",url:"audio/gato_con_botas/fx/hombre_pensativo.mp3"},
    ], 
    n_escena:0, 
    escenas: 
    [
        {
            nombre:"Escena 1",
            miniatura:"img/gato_con_botas/gato_con_botas_mini_0.jpg",
            audio:"audio/gato_con_botas/gato_con_botas_escena_01.mp3",
            parrafos:
            [
                {
                    texto: 'Hace muchos años, un molinero heredó a sus tres hijos los pocos bienes que tenía:',
                    tiempo:[0,6,12]
                },
                {
                    texto: 'al mayor le heredó su molino;',
                    tiempo:[6.5,9,1]
                },
                {
                    texto: 'al del medio, el burro; ',
                    tiempo:[9.5,11.8,1]
                },
                {
                    texto: 'y al menor, el gato.',
                    tiempo:[12.3,14.5,1]
                },
            ]
        },
        {
            nombre:"Escena 2",
            miniatura:"img/gato_con_botas/gato_con_botas_mini_1.jpg",
            audio:"audio/gato_con_botas/gato_con_botas_escena_02.mp3",
            parrafos:
            [
                {
                    texto: '“Tengo muy mala suerte: ¡De qué me sirve un gato!”',
                    tiempo:[0,5,2]
                },
                {
                    texto: '- se lamentaba el hermano menor.',
                    tiempo:[5.5,7.6,0.5]
                },
                {
                    texto: '“Miauuuuu, no te aflijas” -le dijo el gato.',
                    tiempo:[8.1,12.1,2]
                },
                {
                    texto: '“Dame un saco y un par de botas, y verás que tu herencia no es tan mala como crees.”',
                    tiempo:[12.6,17.8,0.5]
                },
                {
                    texto: 'El joven no podía creer que su gato le estuviera hablando.',
                    tiempo:[18.3,22.08,2]
                },
            ]
        },
        {
            nombre:"Escena 3",
            miniatura:"img/gato_con_botas/gato_con_botas_mini_2.jpg",
            audio:"audio/gato_con_botas/gato_con_botas_escena_03.mp3",
            parrafos:
            [
                {
                    texto: 'El gato se echó el saco al hombro y se fue al campo a cazar conejos.',
                    tiempo:[0,4.4,2]
                },
                {
                    texto: 'Luego se encaminó a palacio y se presentó ante al rey.',
                    tiempo:[4.9,8.6,1]
                },
                {
                    texto: '“Majestad, traigo a usted un regalo de parte mi señor, el Marqués de Carabás.”',
                    tiempo:[9.1,15.1,4]
                },
                {
                    texto: 'El Rey lo recibió con gusto,',
                    tiempo:[15.6,17.7,1.5]
                },
                {
                    texto: 'al igual que los otros regalos que el gato continuó llevándole durante meses.',
                    tiempo:[18.2,23.5,0.5]
                },
                
            ]
        },
        {
            nombre:"Escena 4",
            miniatura:"img/gato_con_botas/gato_con_botas_mini_3.jpg",
            audio:"audio/gato_con_botas/gato_con_botas_escena_04.mp3",
            parrafos:
            [
                {
                    texto: 'Un día, el gato escuchó en el palacio que el Rey y su hija, la princesa, saldrían de paseo.',
                    tiempo:[0,6.7,2]
                },
                {
                    texto: 'Corrió donde su amo y le dijo:',
                    tiempo:[7.2,9.4,1]
                },
                {
                    texto: '“Rápido, ven conmigo al río.',
                    tiempo:[9.9,12.3,0.5]
                },
                {
                    texto: 'Confía en mí.”',
                    tiempo:[12.8,13.8]
                },
                {
                    texto: 'El joven lo siguió sin comprender lo que ocurría.',
                    tiempo:[14.3,17.2,2]
                },
                {
                    texto: '“Ahora, sácate la ropa y métete al río.”',
                    tiempo:[17.7,20.5,1]
                },
            ]
        },
        {
            nombre:"Escena 5",
            miniatura:"img/gato_con_botas/gato_con_botas_mini_4.jpg",
            audio:"audio/gato_con_botas/gato_con_botas_escena_05.mp3",
            parrafos:
            [
               
                {
                    texto: 'Cuando el carruaje del Rey se aproximaba, el gato comenzó a gritar:',
                    tiempo:[2.2,6.5,1]
                },
                {
                    texto: '“Miauuuuu ¡Auxilio! Han asaltado a mi amo, el Marqués de Carabás,',
                    tiempo:[7,13.7,0.5]
                },
                {
                    texto: 'y le han robado su carruaje y su ropa”',
                    tiempo:[14.2,16.5,0.5]
                },
                {
                    texto: 'El Rey, que de inmediato reconoció al gato,',
                    tiempo:[17,19.9,7.9]
                },
                {
                    texto: 'ordenó rescatar al joven.',
                    tiempo:[20.4,22.5]
                },
                
            ]
        },
        {
            nombre:"Escena 6",
            miniatura:"img/gato_con_botas/gato_con_botas_mini_5.jpg",
            audio:"audio/gato_con_botas/gato_con_botas_escena_06.mp3",
            parrafos:
            [
                {
                    texto: 'Luego de ser rescatado del río,',
                    tiempo:[0,2,2]
                },
                {
                    texto: 'el joven fue vestido con un traje real e invitado a seguir el paseo junto al Rey y la princesa.',
                    tiempo:[2.5,8.8,0.5]
                },
                /* {
                    texto: 'El astuto gato se adelantó rumbo al castillo de un ogro muy poderoso que vivía cerca de allí.',
                    tiempo:[9.3,16.2,2]
                }, */ //ESTO DEBE IR PRIMERO EN LA SIGUIENTE ESCENA
                
            ]
        },
        {
            nombre:"Escena 7",
            miniatura:"img/gato_con_botas/gato_con_botas_mini_6.jpg",
            audio:"audio/gato_con_botas/gato_con_botas_escena_07.mp3",
            parrafos:
            [
                
                {
                    texto: 'El astuto gato se adelantó rumbo al castillo de un ogro muy poderoso que vivía cerca de allí.',
                    tiempo:[0,7,1]
                },
                {
                    texto: 'El gato le dijo al ogro:',
                    tiempo:[7.5,9.1,2]
                },
                {
                    texto: '“La gente dice que puedes convertirte en cualquier animal,',
                    tiempo:[9.6,13.8,1]
                },
                {
                    texto: 'pero yo creo que eso es imposible.”',
                    tiempo:[14.3,16.4,0.5]
                },
                {
                    texto: 'El ogro se convirtió inmediatamente en un león.',
                    tiempo:[16.9,19.6,2]
                },
                {
                    texto: '“Tu poder es muy grande” - dijo el gato asustado.',
                    tiempo:[20.1,23.6,6]
                },
                {
                    texto: '“Pero no creo que puedas convertirte en algo tan pequeñito como un ratón.”',
                    tiempo:[24.1,29.1,0.5]
                },
                {
                    texto: 'El ogro, que era muy vanidoso, lo hizo...',
                    tiempo:[29.6,32.9,1]
                },
                {
                    texto: '¡y el gato se lo comió!',
                    tiempo:[33.4,35.1,0.5]
                },
                {
                    texto: '',
                    tiempo:[35.3,38.3,5]
                },
                {
                    texto: '',
                    tiempo:[39,40,2]
                },
                
            ]
        },
        {
            nombre:"Escena 8",
            miniatura:"img/gato_con_botas/gato_con_botas_mini_7.jpg",
            audio:"audio/gato_con_botas/gato_con_botas_escena_08.mp3",
            parrafos:
            [
                {
                    texto: 'Cuando el Rey, la princesa y el joven llegaron al castillo del ogro,',
                    tiempo:[0,4.4,2]
                },
                {
                    texto: 'el gato - guiñando un ojo al joven - dijo:',
                    tiempo:[4.9,8.7,1]
                },
                {
                    texto: '“Majestad, bienvenido al castillo de mi señor, el Marqués de Carabás.”',
                    tiempo:[9.2,14.5,1]
                },
                {
                    texto: 'La familia real quedó encantada con tan hermoso palacio.',
                    tiempo:[15,19.6,2]
                },
                {
                    texto: 'El joven y la princesa se enamoraron y fueron muy felices juntos.',
                    tiempo:[20.1,25.9,1.5]
                },
                {
                    texto: 'Y colorado colorín, este cuento llegó a su fin.',
                    tiempo:[26.4,31,2]
                },
            ]
        },
    ]    
    
  
};

let ANIM = {
     /* ↓↓↓↓↓ HOLA CATA - COPIA DESDE LA LÍNEA SIGUIENTE ↓↓↓↓↓ */
    main_tl:undefined,
    creapartes:() => {
        // PONER ACÁ LO QUE SE VAYA A CREAR "ON THE FLY"
        let contcorazones = $('#escena_07 .corazones');
        contcorazones.append(ANIM.creaElementos(20, ['A'], 'corazon', 'sprite_02'));
    },
    creaElementos:(cant, arr2, clase, claseAdicional ='') => {
        let count = -1;
        let arr1 = Array(cant).fill(cant);
        let newArr = arr1.map((item, i) => {
            if(i % arr2.length == 0 ){
                count+=1;
            }
            let j = i-count*arr2.length;
            let letra = arr2[j];
            return `<div class="${claseAdicional} ${clase} ${clase}${letra} ${clase}${(i)}"></div>`;
        });
        return newArr.join("");
    },
    fadeVolume:(cual, desde = 1, hasta=0.2 , t = 1) => {
        let o = {vol:desde};
        let fade = new TimelineMax({onUpdate:function(){
            Player.cambiaVolume(cual, o.vol);
        }});
        
        fade.to(o, t,{vol:hasta});
        fade.play();
    },
    arrWaitSounds:[],
    waitForSound:(cual, waitFor=4, cuantoDura=14, cuantasVeces = 1, cuantoDejoAlFinal = 0, volume=1, fade = false, fadeFrom = 12, volFadeTo = 0) => {
        
        if(!ANIM[`wait_sound_${cual}`]){
            ANIM[`wait_sound_${cual}`] = new TimelineMax({repeat:cuantasVeces-1});
            
            let o = {val:0};
            let waitTL = `+=${waitFor}`;
            ANIM[`wait_sound_${cual}`]

            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX(cual);
                Player.cambiaVolume(cual,volume);
            },waitTL)
            .to(o, cuantoDura+cuantoDejoAlFinal,{val:100})
            .addLabel('final')
            ;
            
//            ANIM[`wait_sound_${cual}`].add(TweenMax.to(o, cuantoDura+cuantoDejoAlFinal,{val:100}),waitFor);   
            
            if(fade){
                ANIM[`wait_sound_${cual}`].addCallback(function(){
                    ANIM.fadeVolume(cual,volume,volFadeTo, cuantoDura-fadeFrom);
                },waitFor+fadeFrom);
            }
            
            ANIM.arrWaitSounds.push(ANIM[`wait_sound_${cual}`]);
        }
        ANIM[`wait_sound_${cual}`].play(0);
    },
    pauseWaitSound:() => {
         ANIM.arrWaitSounds.map((item, i) => {
            item.pause();
        });
    },
    pauseAnimaciones:() => {
        ANIM.arrAnimacionesSprite.map((item, i) => {
            item.tl.pause();
        });
        
        ANIM.arrTlParpadeos.map((item, i) => {
            item.pause(0.1);
        });
        try{ANIM.tl_giramolino.pause();}catch(err){}
        try{ANIM.tl_cola02.pause();}catch(err){}
    },
    arrAnimacionesSprite:[],
    getTlAnimacionesSprite:(escena,clase,frames = 2, timeOn=1, timeOff = 0, repeatOn=1, yoyo=false, repeatOff = -1) => {
        if(!ANIM[`tl_${clase}_${escena}`]){
            ANIM[`tl_${clase}_${escena}`] = new TimelineMax({repeat:repeatOff});
            ANIM[`tl_${clase}_${escena}`]
                .fromTo(`#escena_${escena} .${clase}`,timeOn,{backgroundPosition:'0% 0%'},{backgroundPosition:`-${(frames-1)*100}% 0%`, ease:
SteppedEase.config(frames-1),repeat:repeatOn,yoyo:yoyo})
            .addCallback(function(){/*nada*/},`+=${timeOff}`)
            ;
            ANIM.arrAnimacionesSprite.push({name:`tl_${clase}_${escena}`, tl:ANIM[`tl_${clase}_${escena}`]});
        }
        return ANIM[`tl_${clase}_${escena}`];
    },
    arrTlParpadeos:[],
    creaParpadeo:(escena = '01', quien = 'mujer', t = 4) => {
        if(!ANIM[`tl_parpadeo_${escena}_${quien}`]){
            ANIM[`tl_parpadeo_${escena}_${quien}`] = new TimelineMax({repeat:-1});
            ANIM[`tl_parpadeo_${escena}_${quien}`]
                .to(`#escena_${escena} .${quien} .parpados`,0.1,{alpha:0})
                .to(`#escena_${escena} .${quien} .parpados`,0.1,{alpha:1, immediateRender:false},'+=0.1')
                .to(`#escena_${escena} .${quien} .parpados`,0.1,{alpha:0, immediateRender:false},'+=0.1')
                .to(`#escena_${escena} .${quien} .parpados`,0.1,{alpha:1, immediateRender:false},'+=0.1')
                .to(`#escena_${escena} .${quien} .parpados`,0.1,{alpha:0, immediateRender:false},'+=0.1')
                .addCallback(function(){},`+=${t}`)
            ;
            ANIM.arrTlParpadeos.push(ANIM[`tl_parpadeo_${escena}_${quien}`]);
        }
        ANIM[`tl_parpadeo_${escena}_${quien}`].resume();  
    },
    animaReflejoAgua:(escena = '04',  valor = 'scaleX') => {
        let div = `#escena_${escena} .agua`;
        TweenMax.killTweensOf(div, { [valor]:true});
        
        if(escena === `0${Player.escena_actual}`){
            let scale = Utils.randomInt(190,240)/100;
            
            let repeats = Utils.randomInt(0,1) == 0 ? 3 : 5;
//            let ease = Utils.randomInt(0,1) == 0 ? {ease:Elastic.easeInOut.config(1,0.5)} : {ease:Bounce.easeInOut};
            let t = Utils.randomInt(70,100)/100;

            TweenMax.to(div,t,{[valor]:scale,  transformOrigin:'top center', repeat:repeats, yoyo:true,
                                         onComplete:function(a,b){
                                             ANIM.animaReflejoAgua(a,b);
                                         },
                                         onCompleteParams:[escena, valor]}); 
        }
    },
    besoAmor:(escena = '00') => {
            let bub = $(`#escena_${escena} .corazones .corazon`);
            bub.each(function(i){
                ANIM.corazon(escena,i);
            });
    },
    corazon:(escena = '00', cual = 1) => {
        let div = `#escena_${escena} .corazones .corazon${cual}`;
        TweenMax.killTweensOf(div, { x:true, y:true,alpha:true});
        
        if(escena === `0${Player.escena_actual}`){
            
            let xFin = Utils.randomInt(0,500)-250;
            let yFin = Utils.randomInt(0,500)-250;
            let t = Utils.randomInt(700,1500)/1000;
            
            
            TweenMax.set(div, {x:0, y:0,  alpha:0});
            
            TweenMax.to(div,t*0.1,{alpha:1}); 
            TweenMax.to(div,t,{x:xFin, y:yFin, ease:Power2.easeIn});
            TweenMax.to(div,t*0.1,{alpha:0,delay:t*0.9}); 
        }
    },
    animaEscena0:() => {
        ANIM.creaParpadeo('00','hermano_mayor',Utils.randomInt(30,70)/10);
        ANIM.creaParpadeo('00','hermano_medio',Utils.randomInt(30,70)/10);
        ANIM.creaParpadeo('00','gato',Utils.randomInt(30,70)/10);
        
        let hermano_gato = ANIM.getTlAnimacionesSprite('00','hermano_gato',2,4,4);
        hermano_gato.resume();
        
        if(!ANIM.tl_giramolino){
            ANIM.tl_giramolino = new TimelineMax({repeat:-1});
            ANIM.tl_giramolino
            .to('#escena_00 .molino',20,{rotation:360, ease:Power0.easeNone});
        };
        ANIM.tl_giramolino.resume();
    },
    animaEscena1:() => {
        ANIM.creaParpadeo('01','hombre_gato',Utils.randomInt(30,70)/10);
        ANIM.creaParpadeo('01','gato',Utils.randomInt(30,70)/10);
    },
    animaEscena2:() => {
        
         ANIM.creaParpadeo('02','rey',Utils.randomInt(30,70)/10);
        
        if(!ANIM.tl_cola02){
            ANIM.tl_cola02 = new TimelineMax({repeat:-1});
            ANIM.tl_cola02
            .set('#escena_02 .gato .cola',{rotation:-70,transformOrigin:'7px 135px'})
            .to('#escena_02 .gato .cola',3,{rotation:-120,transformOrigin:'7px 135px', repeat:3, yoyo:true, ease:Back.easeInOut.config(2), repeatDelay:2})
            .addCallback(function(){},'+=7')
            ;
        };
        ANIM.tl_cola02.resume();
//       TweenMax
        
    },
    animaEscena3:() => {
        
        ANIM.creaParpadeo('03','hermano_gato',Utils.randomInt(30,70)/10);
        ANIM.creaParpadeo('03','gato',Utils.randomInt(30,70)/10);
        
        ANIM.tl_parpadeo_03_gato.pause(0.1);
        
        if(!ANIM.tl_patos_03){
            ANIM.tl_patos_03 = new TimelineMax({repeat:-1});
            ANIM.tl_patos_03
            .fromTo('#escena_03 .pato',15,{x:150, y:0},{x:-2000, y:30, ease:Power0.easeNone})
            .addCallback(function(){},'+=2')
            ;
        };
        ANIM.tl_patos_03.resume();
    },
    animaEscena4:() => {
        ANIM.animaReflejoAgua('04','scaleX');
        ANIM.animaReflejoAgua('04','scaleY');
    },
    animaEscena5:() => {
        ANIM.creaParpadeo('05','gato',Utils.randomInt(30,70)/10);
        ANIM.creaParpadeo('05','rey',Utils.randomInt(30,70)/10);
        
        ANIM.tl_parpadeo_05_gato.pause(0.1);
        ANIM.tl_parpadeo_05_rey.pause(0.1);
    },
    animaEscena6:() => {
        ANIM.creaParpadeo('06','gato',Utils.randomInt(30,70)/10);
        ANIM.creaParpadeo('06','ogro',Utils.randomInt(30,70)/10);
        ANIM.creaParpadeo('06','leon',Utils.randomInt(30,70)/10);

        if(!ANIM.tl_cejas_06){
            ANIM.tl_cejas_06 = new TimelineMax({repeat:-1});
            ANIM.tl_cejas_06
            .set('#escena_06 .ogro .cejas',{x:-20,scale:0.65, rotation:-5, transformOrigin:'100px 45px'})
            .to('#escena_06 .ogro .cejas',1,{x:-10,scale:0.65, rotation:25, transformOrigin:'100px 45px', yoyo:true, repeat:1, repeatDelay:1})
            .addCallback(function(){},'+=2')
            ;
        };
        ANIM.tl_cejas_06.resume();
    },
    animaEscena7:() => {
        ANIM.creaParpadeo('07','gato',Utils.randomInt(30,70)/10);
        ANIM.creaParpadeo('07','raton',Utils.randomInt(30,70)/10);
    },
    init:() => {
        ANIM.creapartes();
        Player.creaMainTL();
        
        //00
        ANIM.main_tl.addCallback( function(){
            Player.playSoundFX('musica_inicio');
            //Player.cambiaVolume('musica_inicio', 0.2);
            ANIM.fadeVolume('musica_inicio',0.3,0,12);
        } ,'escena_0+=0.01');
       /*  ANIM.main_tl.addCallback( function(){
        } ,'0_0-=3'); */
        ANIM.main_tl.add( TweenMax.to('#escena_00',16,{x:-1220, ease:Power4.easeInOut}),'0_0+=2');
        ANIM.main_tl.add( TweenMax.from('#escena_00 .hermano_mayor',0.3,{y:-50, alpha:0}),'0_1-=0.5');
        ANIM.main_tl.add( TweenMax.from('#escena_00 .hermano_medio',0.3,{y:-50, alpha:0}),'0_2-=1');
        ANIM.main_tl.add( TweenMax.from('#escena_00 .hermano_gato',0.3,{y:-50, alpha:0}),'0_3-=0.5');
        ANIM.main_tl.add( TweenMax.from('#escena_00 .gato',0.3,{y:-50, alpha:0}),'0_3-=0.5');
       
        
        
        //01
        ANIM.main_tl.add( TweenMax.set('#escena_01 .gato .brazo',{rotation:-70,transformOrigin:'6px 12px'}),'escena_1+=0.01');
        ANIM.main_tl.add( TweenMax.set('#escena_01 .gato .cola',{rotation:120,transformOrigin:'48px 301px'}),'escena_1+=0.01');
        ANIM.main_tl.add( TweenMax.set('#escena_01 .gato .boca',{rotation:0,transformOrigin:'32px 2px'}),'escena_1+=0.01');
        ANIM.main_tl.add( TweenMax.set('#escena_01 .hombre_gato .boca',{alpha:1}),'escena_1+=0.01');
        
        ANIM.main_tl.add( TweenMax.fromTo('#escena_01 .gato',4,{rotation:180},{rotation:0,transformOrigin:'0px 477px', ease:Elastic.easeOut.config(0.4,0.3)}),'1_0+=0.5');
        ANIM.main_tl.add( TweenMax.to('#escena_01 .gato .brazo',5,{rotation:0,transformOrigin:'6px 12px', ease:Elastic.easeOut.config(1,0.3)}),'1_0+=1');
        ANIM.main_tl.add( TweenMax.to('#escena_01 .gato .cola',6,{rotation:70,transformOrigin:'48px 301px', ease:Elastic.easeOut.config(1,0.3)}),'1_0+=1');
        
        ANIM.main_tl.add( TweenMax.to('#escena_01 .gato .cola',5,{rotation:50,transformOrigin:'48px 301px', ease:Elastic.easeOut.config(0.4,0.3)}),'1_2+=0.1');
        ANIM.main_tl.add( TweenMax.to('#escena_01 .gato .brazo',3,{rotation:60,transformOrigin:'6px 12px', ease:Elastic.easeOut.config(1,0.3)}),'1_2+=0.1');
        ANIM.main_tl.add( TweenMax.fromTo('#escena_01 .gato .boca',0.1,{rotation:0},{rotation:-20,transformOrigin:'32px 2px', repeat:5, yoyo:true}),'1_2+=0.1');
        ANIM.main_tl.add( TweenMax.set('#escena_01 .hombre_gato .boca',{alpha:0}),'1_2+=1');
        ANIM.main_tl.add( TweenMax.to('#escena_01 .gato .brazo',4,{rotation:90,transformOrigin:'6px 12px', ease:Elastic.easeInOut.config(1,0.3)}),'1_3+=0.1');
        ANIM.main_tl.add(  TweenMax.fromTo('#escena_01 .gato .boca',0.1,{rotation:0},{rotation:-20,transformOrigin:'32px 2px', repeat:31, yoyo:true}),'1_3+=0.1');
        ANIM.main_tl.add(  TweenMax.fromTo('#escena_01 .gato .boca',0.15,{rotation:0},{rotation:-20,transformOrigin:'32px 2px', repeat:11, yoyo:true}),'1_3+=3.3');
         ANIM.main_tl.add( TweenMax.to('#escena_01 .gato .cola',8,{rotation:70,transformOrigin:'48px 301px', ease:Elastic.easeInOut.config(0.4,0.3)}),'1_3+=0.1');
        ANIM.main_tl.add( TweenMax.to('#escena_01 .gato .brazo',1,{rotation:0,transformOrigin:'6px 12px'}),'1_4+=0.1');

        
        //02 
        

        ANIM.main_tl.addCallback( function(){
            Player.playSoundFX('fanfarria_real');
            Player.cambiaVolume('fanfarria_real', 0.2);
            //ANIM.fadeVolume('fanfarria_real',0.3,0,12);

        } ,'2_1+=3.7');

        ANIM.main_tl.add( TweenMax.set('#escena_02 .gato',{rotation:12, transformOrigin:'107px 249px', scale:2}),'escena_2+=0.1');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .gato .parpados',{alpha:0}),'escena_2+=0.1');
        ANIM.main_tl.add( TweenMax.to('#escena_02',10,{x:-1550, ease:Power1.easeInOut}),'2_0+=0.5');
        ANIM.main_tl.add( TweenMax.from('#escena_02 .soldado',3,{x:200, ease:Power1.easeInOut}),'2_0+=7');
        ANIM.main_tl.add( TweenMax.from('#escena_02 .gato',3,{x:-2500, ease:Power1.easeInOut}),'2_0+=7');
        ANIM.main_tl.add( TweenMax.to('#escena_02 .gato',1,{rotation:0, transformOrigin:'107px 249px', ease:Bounce.easeOut}),'2_2-=1');
        ANIM.main_tl.add( TweenMax.set('#escena_02 .gato .parpados',{alpha:1}),'2_2-=1');
        
        
        //03
        ANIM.main_tl.add( TweenMax.set('#escena_03 .gato',{x:900}),'escena_3+=0.01');   
        ANIM.main_tl.add( TweenMax.set('#escena_03 .gato .boca',{alpha:0}),'escena_3+=0.01');
        ANIM.main_tl.add( TweenMax.fromTo('#escena_03 .gato',0.5,{backgroundPosition:'0% -100%'},{backgroundPosition:'-100% -100%', ease:SteppedEase.config(1),repeat:7}),'3_1-=1.5');
        ANIM.main_tl.add( TweenMax.to('#escena_03 .gato',4,{x:0}),'3_1-=1.5');
        ANIM.main_tl.add( TweenMax.to('#escena_03 .gato',0.5,{backgroundPosition:'0% 0%',ease:SteppedEase.config(1)}),'3_1+=2.6');
        ANIM.main_tl.addCallback(function(){
            ANIM.tl_parpadeo_03_gato.play();
        },'3_1+=3');
        
        let gato_habla_03 = new TimelineMax();
        gato_habla_03
        .set('#escena_03 .gato .boca',{alpha:1})
        .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:1},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:1},'+=0.4')
        .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:1},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:1},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:1},'+=0.4')
        .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:1},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
        ;
        ANIM.main_tl.add( gato_habla_03,'3_2+=0.1');
        
        let gato_habla_03B = new TimelineMax();
        gato_habla_03B
        .set('#escena_03 .gato .boca',{alpha:1})
        .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:1},'+=0.4')
        .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:1},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:1},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:1},'+=0.1')
        .set('#escena_03 .gato .boca',{alpha:0},'+=0.1')
        .set('#escena_03 .gato .boca',{alpha:1},'+=0.1')
        .set('#escena_03 .gato .boca',{alpha:0},'+=0.1')
        .set('#escena_03 .gato .boca',{alpha:1},'+=0.2')
        .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
        ;
        ANIM.main_tl.add( gato_habla_03B,'3_5+=0.1');

        //04
        let preAnimacion5 = new TimelineMax()
        preAnimacion5
            .addCallback(function(){
                //Player.playSoundFX('cabalgata',false,10);
                Player.playSoundFX('cabalgata');
                //ANIM.fadeVolume('cabalgata',0.1,0.3,10);
            })
            .fromTo('#escena_04 .carruaje01',8,{x:-900},{x:1920, ease:Power0.easeNone})
            .fromTo('#escena_04 .carruaje01',0.25,{scaleY:2},{scaleY:1.9, ease:Power1.easeIn, repeat:40, yoyo:true})
        ANIM.main_tl.add(preAnimacion5, '4_2+=2.3')

        
        //06
        ANIM.main_tl.add( TweenMax.fromTo('#escena_06 .fondo_intro',4,{rotation:0, scale:1},{rotation:-10,scale:6, ease:Power2.easeInOut, transformOrigin:'538px 500px'}),'6_1+=0.01');
        ANIM.main_tl.add( TweenMax.to('#escena_06 .fondo_intro',1,{alpha:0}),'6_1+=3');
        
        let preAnimacion6 = new TimelineMax()
        preAnimacion6
            .addCallback(function(){
                ANIM.tl_parpadeo_05_gato.play(0.1);
                ANIM.tl_parpadeo_05_rey.play(0.1);
            },'+=5')
            /* .addCallback(function(){
                    ANIM.tl_parpadeo_05_gato.pause(0.1);
                    ANIM.tl_parpadeo_05_rey.pause(0.1);
            },'+=5') */
            .fromTo('#escena_05 .hermano_gato',2,{rotation:0},{rotation:20, ease:Back.easeInOut, transformOrigin:'15px 162px'},7)
            .fromTo('#escena_05 .rey .brazo',2,{rotation:90},{rotation:0, ease:Back.easeInOut, transformOrigin:'20px 20px'},8.5)
        ANIM.main_tl.add(preAnimacion6,'5_0-=2')


        
        //07
        let preAnimacion7 = new TimelineMax()
        preAnimacion7
            .addCallback(function(){
                Player.playSoundFX('magia');
            },'+=1.9')
            .to('#escena_06 .ogro',0.3,{y:-30, repeat:1, yoyo:true})
            .to('#escena_06 .leon',0.3,{y:-30, repeat:1, yoyo:true},'-=0.3')
            .to('#escena_06 .ogro',0.6,{alpha:0},'-=0.3')
            .to('#escena_06 .leon',0.6,{alpha:1},'-=0.6')
            .set('#escena_06 .humo',{alpha:1, y:0},'-=0.6')
            .to('#escena_06 .humo',1,{alpha:0, y:-200},'-=0.6')
        ANIM.main_tl.add(preAnimacion7,'6_4+=1.9')

        let preAnimacion7_1 = new TimelineMax()
        preAnimacion7_1
            .addCallback(function(){
                Player.playSoundFX('magia');
            },'+=1.7')
            .to('#escena_06 .leon',0.3,{y:-30, repeat:1, yoyo:true})
            .to('#escena_06 .raton',0.3,{y:-30, repeat:1, yoyo:true},'-=0.3')
            .to('#escena_06 .leon',0.6,{alpha:0},'-=0.3')
            .to('#escena_06 .raton',0.6,{alpha:1},'-=0.6')
            .set('#escena_06 .humo',{alpha:1, y:0},'-=0.6')
            .to('#escena_06 .humo',1,{alpha:0, y:-200},'-=0.6')
            .fromTo('#escena_06 .raton',1,{x:0,y:0, rotation:0},{x:390,y:-90, rotation:-40, transformOrigin:'50px 79px'},'-=0.6')
            .to('#escena_06 .raton',0.7,{x:390,y:110, rotation:-40, transformOrigin:'50px 79px', ease:Bounce.easeOut})
            .fromTo('#escena_06 .raton',0.07,{rotation:-40},{rotation:-50, yoyo:true, repeat:27, transformOrigin:'50px 79px'}, '-=0.6')
        ANIM.main_tl.add(preAnimacion7_1,'6_8+=1.7')

        let preAnimacion7_2 = new TimelineMax()
        preAnimacion7_2
            .addCallback(function(){
                Player.playSoundFX('magia');
            },'+=1')
            .to('#escena_06 .raton',0.3,{y:-30, repeat:1, yoyo:true})
            .to('#escena_06 .ogro',0.3,{y:-30, repeat:1, yoyo:true},'-=0.3')
            .to('#escena_06 .raton',0.6,{alpha:0},'-=0.3')
            .to('#escena_06 .ogro',0.6,{alpha:1},'-=0.6')
            .set('#escena_06 .humo',{alpha:1, y:0},'-=0.6')
            .to('#escena_06 .humo',1,{alpha:0, y:-200},'-=0.6')
        ANIM.main_tl.add(preAnimacion7_2,'6_9+=1')




        ANIM.main_tl.add( TweenMax.fromTo('#escena_06 .fondo_intro',4,{rotation:0, scale:1},{rotation:-10,scale:6, ease:Power2.easeInOut, transformOrigin:'538px 500px'}),'6_0+=0.01');
        ANIM.main_tl.add( TweenMax.to('#escena_06 .fondo_intro',1,{alpha:0}),'6_0+=3');
        
         //07
        /* ANIM.main_tl.add( TweenMax.set('#escena_07 .princesa',{x:230}),'escena_7+=0.01');
        ANIM.main_tl.add( TweenMax.to('#escena_07 .princesa',1,{x:-20}),'7_3-=1');
        ANIM.main_tl.addCallback( function(){
            ANIM.besoAmor('07');
        },'7_3+=0.1');
        ANIM.main_tl.add( TweenMax.to('#escena_07 .princesa',1,{x:0}),'7_3+=0.1'); */ 

        let preAnimacion8 = new TimelineMax();
        preAnimacion8
            //.set('#escena_07 .princesa',{x:230},'-=0')
            .to('#escena_07 .princesa',2,{x:-240},24)
            .addCallback(function(){
                Player.playSoundFX('beso');
                ANIM.besoAmor('07');
            })
            .to('#escena_07 .princesa',2,{x:0},28)
        ANIM.main_tl.add(preAnimacion8,'7_0+=0')  
        
        
        /*INICIO*/
        /*LLAMADAS Y FUNCIONES ESCENA 0*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            ANIM.animaEscena0();
            Player.hideOthersBut('escena_00');
        },"escena_0"); 
     
        ANIM.main_tl.addCallback(function(){
            ANIM.animaEscena0();
            Player.activaBtnSiguiente(); 
            ANIM.main_tl.pause(); 
            ANIM.interactividad(0, undefined, 'btn_gato'); 
            ANIM.interactividad(0, undefined, 'btn_burro');
            Player.playSoundFX('musica_inicio');
            Player.cambiaVolume('musica_inicio', 0.2); 
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_0"); 
        
       
        /*LLAMADAS Y FUNCIONES ESCENA 1*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            ANIM.animaEscena1();
            Player.hideOthersBut('escena_01');
        },"escena_1");

        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.animaEscena1();
            Player.activaBtnSiguiente();
            ANIM.interactividad(1);
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_1");
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 2*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_02');
            ANIM.animaEscena2();
        },"escena_2");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.animaEscena2();
            ANIM.interactividad(2);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_2");
        
       
         /*LLAMADAS Y FUNCIONES ESCENA 3*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_03');
            ANIM.animaEscena3();
        },"escena_3");
      
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.animaEscena3();
            ANIM.interactividad(3);
            Player.playSoundFX('rio',true);
            ANIM.fadeVolume('rio',0,0.2,10);
            Player.playSoundFX('musica_inicio',true);
            ANIM.fadeVolume('musica_inicio',0.1,0.2,10);
            //ANIM.waitForSound('rio',0,10,0,0,0.2);
            //Player.playSoundFX('musica_inicio', true);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_3");
        
        
        
        /*LLAMADAS Y FUNCIONES ESCENA 4*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_04');
            ANIM.animaEscena4();
        },"escena_4");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.animaEscena4();
            ANIM.interactividad(4);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_4");
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 5*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_05');
            ANIM.animaEscena5();
        },"escena_5");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.interactividad(5);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            console.log("fin_escena 5");
        },"fin_escena_5");
        
        
         /*LLAMADAS Y FUNCIONES ESCENA 6*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_06');
            ANIM.animaEscena6();
        },"escena_6");

        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.animaEscena6();
            ANIM.interactividad(6);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
        },"fin_escena_6");
        
        /*LLAMADAS Y FUNCIONES ESCENA 7*/ //<-----------------------------------------------------
        ANIM.main_tl.addCallback(function(){
            Player.hideOthersBut('escena_07');
            ANIM.animaEscena7();
        },"escena_7");
        
        ANIM.main_tl.addCallback(function(){
            ANIM.main_tl.pause();
            ANIM.animaEscena7();
            ANIM.interactividad(7);
            Player.activaBtnSiguiente();
            Player.tooglePlayPauseIco();
            Player.resetSubtitulos();
            Player.playSoundFX('musica_inicio',true);
        },"fin_escena_7");
        
       
        ANIM.creaAnimInteractividad();
        ANIM.main_tl.pause();
    },
    creaAnimInteractividad:() => {
        
        //
        ANIM.anim_interact_0_gato = new TimelineMax(); 
        ANIM.anim_interact_0_gato
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('miau');
            })
            .fromTo('#escena_00 .gato .cola',1,{rotation:20},{rotation:70, transformOrigin:'5px 142px', repeat:1, yoyo:true})
            .addLabel('final')
            
             ;
        ANIM.anim_interact_0_gato.pause();
       
        //
        ANIM.anim_interact_0_burro = new TimelineMax(); 
        ANIM.anim_interact_0_burro
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('burro');
            })
           .fromTo('#escena_00 .hermano_medio .cabeza',0.7,{rotation:-10},{rotation:40, transformOrigin:'55px 60px', repeat:1, yoyo:true, ease:Bounce.easeOut})
            .addLabel('final')
            
             ;
        ANIM.anim_interact_0_burro.pause();
        //
        ANIM.anim_interact_1_gato = new TimelineMax(); 
        ANIM.anim_interact_1_gato
         
            .addLabel('inicio')
          
            .addCallback(function(){
                Player.playSoundFX('no_te_aflijas');
            })
            .to('#escena_01 .gato .brazo',3,{rotation:60,transformOrigin:'6px 12px', ease:Elastic.easeOut.config(1,0.3)})
            .fromTo('#escena_01 .gato .boca',0.1,{rotation:0},{rotation:-20,transformOrigin:'32px 2px', repeat:7, yoyo:true},'-=3')
            .addCallback(function(){
                Player.playSoundFX('sorpresa');
            },'-=1')
            .to('#escena_01 .hombre_gato .boca',.8,{opacity:1,display:'block'},2)
            //.set('#escena_01 .hombre_gato .boca',{alpha:0},'-=1')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_1_gato.pause();
       
        //02
        ANIM.anim_interact_2_saco = new TimelineMax(); 
        ANIM.anim_interact_2_saco
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('miau');
            }, 2)
           
            .addCallback(function(){
                Player.playSoundFX('saco');
            }, "+=8")
            .to('#escena_02 .gato .bolsa',0.3,{rotation:22, transformOrigin:'42px 10px'})
            .to('#escena_02 .gato .bolsa',0.6,{rotation:-42, transformOrigin:'42px 10px'})
            .to('#escena_02 .gato .bolsa',0.6,{rotation:22, transformOrigin:'42px 10px'})
            .to('#escena_02 .gato .bolsa',0.3,{rotation:-42, transformOrigin:'42px 10px'})
            .to('#escena_02 .gato .bolsa',0.6,{rotation:22, transformOrigin:'42px 10px'})
            .to('#escena_02 .gato .bolsa',0.6,{rotation:-42, transformOrigin:'42px 10px'})
            .to('#escena_02 .gato .bolsa',0.6,{rotation:0, transformOrigin:'42px 10px'})
            .to('#escena_02 .gato .parpados',1,{display:'none'},1)
            
            .addCallback(function(){
                try{ ANIM.tl_parpadeo_02_rey.pause(0); } catch(err){}
            })
            
            .addCallback(function(){
                Player.playSoundFX('hombre_pensativo');
            }, "+=5")    
            .to('#escena_02 .rey .cabeza',1,{rotation:-5, transformOrigin:'98px 109px', ease:Power4.easeIn})
            .to('#escena_02 .rey .cabeza',1,{rotation:0, transformOrigin:'98px 109px', ease:Power2.easeIn})
            .to('#escena_02 .rey .cabeza',1,{rotation:-5, transformOrigin:'98px 109px', ease:Power4.easeIn})
            .to('#escena_02 .rey .cabeza',1,{rotation:0, transformOrigin:'98px 109px', ease:Power2.easeIn})
//            .to('#escena_02 .rey .cabeza',1,{rotation:0, transformOrigin:'98px 109px'})
            .addCallback(function(){
                try{ ANIM.tl_parpadeo_02_rey.play(0); } catch(err){}
            })
            .addLabel('final');
        ANIM.anim_interact_2_saco.pause();
        
        ANIM.anim_interact_2_saco.add(TweenMax.to('#escena_02 .gato .bolsa',0.2,{scaleY:1.1, transformOrigin:'42px 10px', repeat:15, yoyo:true}),0);
       
         //03
        ANIM.anim_interact_3_gato = new TimelineMax();
        ANIM.anim_interact_3_gato
         
            .addLabel('inicio')
            .addCallback(function(){
                Player.playSoundFX('metete_al_rio');
            })
            .set('#escena_03 .gato .boca',{alpha:1})
            .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
            .set('#escena_03 .gato .boca',{alpha:1},'+=0.4')
            .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
            .set('#escena_03 .gato .boca',{alpha:1},'+=0.2')
            .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
            .set('#escena_03 .gato .boca',{alpha:1},'+=0.2')
            .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
            .set('#escena_03 .gato .boca',{alpha:1},'+=0.1')
            .set('#escena_03 .gato .boca',{alpha:0},'+=0.1')
            .set('#escena_03 .gato .boca',{alpha:1},'+=0.1')
            .set('#escena_03 .gato .boca',{alpha:0},'+=0.1')
            .set('#escena_03 .gato .boca',{alpha:1},'+=0.2')
            .set('#escena_03 .gato .boca',{alpha:0},'+=0.2')
            .addCallback(function(){
                Player.playSoundFX('sorpresa');
            }, "+=0")
            .addLabel('final')
            
             ;
        ANIM.anim_interact_3_gato.pause();
        
         //04
        ANIM.anim_interact_4_carruajes = new TimelineMax();
        ANIM.anim_interact_4_carruajes
         
            .addLabel('inicio')
            .addCallback(function(){ 
                Player.playSoundFX('cabalgata');
                ANIM.fadeVolume('cabalgata',1,0,7);
                //Player.playSoundFX('cabalgata',false,3);
            })
            .fromTo('#escena_04 .carruaje02',4,{x:700, y:-100},{x:0, y:0, ease:Power1.easeOut},'+=1')
            .fromTo('#escena_04 .carruaje02',0.5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', ease:
                SteppedEase.config(1),repeat:8}, '-=4')
           
            .addCallback(function(){
                Player.playSoundFX('snort');
                Player.cambiaVolume('snort', 0.3);
            },'-=1')
            .addCallback(function(){
                Player.playSoundFX('caballito');
                Player.cambiaVolume('caballito',0.5);
            },'+=1')
            .addLabel('final');
            
           
        ANIM.anim_interact_4_carruajes.pause();
        ANIM.anim_interact_4_carruajes.add(TweenMax.fromTo('#escena_04 .gato',0.5,{backgroundPosition:'0% 0%'},{backgroundPosition:'-100% 0%', ease:SteppedEase.config(1),repeat:6}),2); 
        /* ANIM.anim_interact_4_carruajes.addCallback(function(){
                Player.playSoundFX('caballito');
                Player.cambiaVolume('caballito',0.5);
                Player.playSoundFX('cabalgata',false, 7);
                ANIM.fadeVolume('cabalgata',0.3,1,3);
        },10); */
//        
          //05
        /* ANIM.anim_interact_5_reverencia = new TimelineMax();
        ANIM.anim_interact_5_reverencia
         
            .addLabel('inicio')
            .addCallback(function(){
             
            })
            .set('#escena_05 .hermano_gato .parpados',{alpha:1})
            .fromTo('#escena_05 .hermano_gato',2,{rotation:0},{rotation:20, ease:Back.easeInOut, transformOrigin:'15px 162px'})
            .fromTo('#escena_05 .rey .brazo',2,{rotation:90},{rotation:0, ease:Back.easeInOut, transformOrigin:'20px 20px'})
            .addCallback(function(){
                    ANIM.tl_parpadeo_05_gato.play(0.1);
                    ANIM.tl_parpadeo_05_rey.play(0.1);
            })
            .addCallback(function(){
                    ANIM.tl_parpadeo_05_gato.pause(0.1);
                    ANIM.tl_parpadeo_05_rey.pause(0.1);
            },'+=2')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_5_reverencia.pause(); */
       
        //06
        ANIM.anim_interact_6_ogro = new TimelineMax(); 
        ANIM.anim_interact_6_ogro
         
            .addLabel('inicio')
            .to('#escena_06 .ogro',0.3,{y:-30, repeat:1, yoyo:true})
            .to('#escena_06 .leon',0.3,{y:-30, repeat:1, yoyo:true},'-=0.3')
            .to('#escena_06 .ogro',0.6,{alpha:0},'-=0.3')
            .to('#escena_06 .leon',0.6,{alpha:1},'-=0.6')
            .set('#escena_06 .humo',{alpha:1, y:0},'-=0.6')
            .to('#escena_06 .humo',1,{alpha:0, y:-200},'-=0.6')
            .addCallback(function(){
                Player.playSoundFX('magia');
            },'-=0.9')
            .addCallback(function(){
                ANIM.anim_interact_6_ogro.pause();
                $('#escena_06 .btn_interact.primario').show();
            })
            .to('#escena_06 .leon',0.3,{y:-30, repeat:1, yoyo:true})
            .to('#escena_06 .raton',0.3,{y:-30, repeat:1, yoyo:true},'-=0.3')
            .to('#escena_06 .leon',0.6,{alpha:0},'-=0.3')
            .to('#escena_06 .raton',0.6,{alpha:1},'-=0.6')
            .set('#escena_06 .humo',{alpha:1, y:0},'-=0.6')
            .to('#escena_06 .humo',1,{alpha:0, y:-200},'-=0.6')
            .addCallback(function(){
                Player.playSoundFX('magia');
            },'-=0.9')
            .fromTo('#escena_06 .raton',1,{x:0,y:0, rotation:0},{x:390,y:-90, rotation:-40, transformOrigin:'50px 79px'},'-=0.6')
            .to('#escena_06 .raton',0.7,{x:390,y:110, rotation:-40, transformOrigin:'50px 79px', ease:Bounce.easeOut})
            .addCallback(function(){
                ANIM.anim_interact_6_raton.play(0);
            })
            .addLabel('final')
            
             ;
        ANIM.anim_interact_6_ogro.pause();
       //06
        ANIM.anim_interact_6_raton = new TimelineMax({repeat:-1, repeatDelay:1}); 
        ANIM.anim_interact_6_raton
         
            .addLabel('inicio')
            .fromTo('#escena_06 .raton',0.07,{rotation:-40},{rotation:-50, yoyo:true, repeat:27, transformOrigin:'50px 79px'})
            .addLabel('final')
            
             ;
        ANIM.anim_interact_6_raton.pause();
       
        //07
        ANIM.anim_interact_7_amor = new TimelineMax(); 
        ANIM.anim_interact_7_amor
         
            .addLabel('inicio')
            .to('#escena_07 .princesa',2,{x:-240})
            .addCallback(function(){
                Player.playSoundFX('beso');
                ANIM.besoAmor('07');
            })
            .to('#escena_07 .princesa',2,{x:0},'+=4')
            .addLabel('final')
            
             ;
        ANIM.anim_interact_7_amor.pause();
       
//        
        
        
        ANIM.arr_interacts = [
            ANIM.anim_interact_0_gato,
            ANIM.anim_interact_0_burro,
            ANIM.anim_interact_1_gato,
            ANIM.anim_interact_2_saco,
            ANIM.anim_interact_3_gato,
            ANIM.anim_interact_4_carruajes,
            ANIM.anim_interact_5_reverencia,
            ANIM.anim_interact_6_ogro,
            ANIM.anim_interact_6_raton,
            ANIM.anim_interact_7_amor,
        ];
        
        ANIM.setIniciales();
    },
    pausaInteractividad:() =>{
        ANIM.arr_interacts.map((anim) => { // y como la interacción está acá las pauso todas al mismo tiempo a voluntad
            anim.pause(0);
            anim.eventCallback("onComplete", null);  //<--- para matar los eventos de onComplete para evitar que muestren los botones en otra escenas
        });
       
        ANIM.setIniciales();
    },
    setIniciales:() => {
        //estado inicial
        
//        TweenMax.killTweensOf("#escena_00 .stuff");
        TweenMax.set('.scale2',{scale:2, transformOrigin:'top left'});
        TweenMax.set('.scale15',{scale:1.5, transformOrigin:'top left'});
//        TweenMax.set('.scale05',{scale:0.5, transformOrigin:'top left'});
        
        TweenMax.set('#escena_00 .gato .cola',{rotation:20, transformOrigin:'5px 142px'});
        
        TweenMax.set('#escena_01 .gato',{scale:2, transformOrigin:'0px 477px'});
        TweenMax.set('#escena_01 .gato .parpados',{scale:1.05});
        
//        TweenMax.set('#escena_02 .gato .cola',{rotation:-70,transformOrigin:'7px 135px'});
        
        TweenMax.set('#escena_04 .carruaje01',{scale:2, transformOrigin:'bottom left'});
        TweenMax.set('#escena_04 .carruaje02',{scale:2, transformOrigin:'bottom left'});
        TweenMax.set('#escena_04 .arbusto.arbustoB',{rotation:90, transformOrigin:'top left'});
        TweenMax.set('#escena_04 .agua',{scale:2, transformOrigin:'top center'});
        
        TweenMax.set('#escena_05 .hermano_gato',{scale:2, transformOrigin:'15px 162px'});
        TweenMax.set('#escena_05 .rey .brazo',{rotation:90, transformOrigin:'20px 20px'});
        TweenMax.set('#escena_05 .hermano_gato .parpados',{alpha:0});
        
        
        TweenMax.set('#escena_06 .ogro',{alpha:1, y:0});
        TweenMax.set('#escena_06 .leon',{alpha:0, y:0});
        TweenMax.set('#escena_06 .raton',{alpha:0, y:0});
        TweenMax.set('#escena_06 .humo',{alpha:0, y:0});
        
        TweenMax.set('#escena_07 .corazon',{alpha:0, y:0, x:0});
        
        ANIM.pauseWaitSound();
        ANIM.pauseAnimaciones();
        
        $('.indicador_interactividad').css({'display':'none'});
        
    },
    displayInteract:(cualEscena) => {
        $(cualEscena+' .interact').css({'display':'block'});
    },
    interactividad:(nEscena, callback = undefined, btn_especifico = "primario", alphabutton = 1) => {
        let i_st = nEscena > 9 ? (nEscena) : `0${(nEscena)}`;
        
//        console.log(i_st);
        
        var btn = $('#escena_'+i_st +' .btn_interact.'+btn_especifico);
        var cb = callback;
        btn.css({"display":"block"});
        TweenMax.fromTo(btn,1,{alpha:0},{alpha:alphabutton});
        let muestralo = (div, cbb) => {
            if(cbb !== undefined){
                cbb();
            }
            div.css({"display":"block"});             
        }
         switch (nEscena){
            case 0:
               if(btn.hasClass('btn_gato')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0_gato.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_gato.play(0);
                    });
                 }
                 if(btn.hasClass('btn_burro')){
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_0_burro.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_0_burro.play(0);
                    });
                 }
                break;
             case 1:
                
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_1_gato.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_1_gato.play(0);
                    });
                break;
            case 2:
                
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_2_saco.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_2_saco.play(0);
                    });
                 break;
             case 3:
                    btn.click(function(){
                        $(this).css({"display":"none"});
                        ANIM.anim_interact_3_gato.eventCallback("onComplete", muestralo, [$(this), cb]);   
                        ANIM.anim_interact_3_gato.play(0);
                    });
                 
                 break;
            case 4:
                 
                btn.click(function(){
                    $(this).css({"display":"none"});
                    ANIM.anim_interact_4_carruajes.eventCallback("onComplete", muestralo, [$(this), cb]);   
                    ANIM.anim_interact_4_carruajes.play(0);
                });
                 break;
             case 5:
                 btn.click(function(){
                    $(this).css({"display":"none"});
                    ANIM.anim_interact_5_reverencia.eventCallback("onComplete", muestralo, [$(this), cb]);   
                    ANIM.anim_interact_5_reverencia.play(0);
                });
                
                 break;
            case 6:
                btn.click(function(){
                    $(this).css({"display":"none"});
                    ANIM.anim_interact_6_ogro.eventCallback("onComplete", muestralo, [$(this), cb]);   
                     if(ANIM.anim_interact_6_ogro.currentLabel() === 'final'){
                            ANIM.anim_interact_6_ogro.play(0);
                        } else {
                            ANIM.anim_interact_6_ogro.play();
                        }
                });
                 break;
             case 7:
                  btn.click(function(){
                    $(this).css({"display":"none"});
                    ANIM.anim_interact_7_amor.eventCallback("onComplete", muestralo, [$(this), cb]);   
                    ANIM.anim_interact_7_amor.play(0);
                });
                
                 break;
             case 8:
                    
                 break;
             
        }
    },
    compensaEscenas:(d) => {
        // ESTA FUNCIÓN HAY QUE CONFIGURARLA A MANO POR CADA ESCENA QUE LO NECESITE 
        // (EN ESTE CASO LA ILUSTRACIÓN SE PERDÍA POR ARRIBA, POR ESO ESE COMPENSA POR TOP,
        // SI FUESE AL REVÉS COMPENSARÍA POR BOTTOM)
       let dif = Math.abs(d); 
//        $('#escena_00').css({'bottom':dif+'px'});
//        $('#escena_01').css({'top':dif+'px'});
//        $('#escena_02').css({'bottom':dif+'px'});
//        $('#escena_03').css({'bottom':dif+'px'});
//        $('#escena_04').css({'bottom':dif+'px'});
//        $('#escena_05').css({'bottom':dif+'px'});
//        $('#escena_07').css({'bottom':dif+'px'});
//        $('#escena_08').css({'bottom':dif+'px'});
//        $('#escena_09').css({'bottom':dif+'px'});
//        $('#escena_10').css({'bottom':dif+'px'});
    }
         /*↑↑↑↑ HASTA LA ANTERIOR ↑↑↑↑↑*/
};