YUI.add("sortable",function(G){var D=function(I){D.superclass.constructor.apply(this,arguments);},E="currentNode",C="opacityNode",B="id",F="opacity",H="parentNode",A="node";D.NAME="sortable";D.ATTRS={cont:{value:"body"},nodes:{value:".dd-draggable"},opacity:{value:".75"},opacityNode:{value:"currentNode"},id:{value:null},moveType:{value:"swap"},invalid:{value:""}};D._sortables=[];D.getSortable=function(J){var I=null;J=G.one(J);G.each(D._sortables,function(K){if(J.test(K.get("cont"))){I=K;}});return I;};D.regSortable=function(I){D._sortables.push(I);};D.unregSortable=function(I){G.each(D._sortables,function(K,J){if(K===I){D._sortables[J]=null;delete D._sortables[J];}});};G.extend(D,G.Base,{delegate:null,initializer:function(){var L="sortable-"+G.stamp({}),K,J=this,I=new G.DD.Delegate({cont:J.get("cont"),nodes:J.get("nodes"),target:true,invalid:J.get("invalid"),dragConfig:{groups:[L]}});J.set(B,L);I.dd.plug(G.Plugin.DDProxy,{moveOnEnd:false,cloneNode:true});K=new G.DD.Drop({node:J.get("cont"),bubbles:I,groups:I.dd.get("groups")}).on("drop:over",G.bind(J._handleDropOver,J));I.on("drag:start",G.bind(J._handleDragStart,J));I.on("drag:end",G.bind(J._handleDragEnd,J));I.on("drag:over",G.bind(J._handleDragOver,J));J.delegate=I;D.regSortable(J);},_handleDropOver:function(J){if(!J.drop.get(A).test(this.get("nodes"))){var I=J.drop.get(A).all(this.get("nodes"));if(I.size()===0){J.drop.get(A).append(J.drag.get(A));}}},_handleDragOver:function(M){if(!M.drop.get(A).test(this.get("nodes"))){return;}if(M.drag.get(A)==M.drop.get(A)){return;}switch(this.get("moveType")){case"swap":G.DD.DDM.swapNode(M.drag,M.drop);break;case"move":case"copy":var L=G.Sortable.getSortable(M.drag.get(A).get(H)),J=G.Sortable.getSortable(M.drop.get(A).get(H)),K,I;M.drop.addToGroup(J.get("id"));if(M.drag.get(A).get(H).contains(M.drop.get(A))){G.DD.DDM.swapNode(M.drag,M.drop);}else{if(this.get("moveType")=="copy"){K=M.drag.get(A);I=K.cloneNode(true);I.set(B,"");M.drag.set(A,I);J.delegate.createDrop(I,[J.get(B)]);K.setStyles({top:"",left:""});}M.drop.get(A).get(H).insertBefore(M.drag.get(A),M.drop.get(A));}break;}},_handleDragStart:function(I){this.delegate.get("lastNode").setStyle("zIndex","");this.delegate.get(this.get(C)).setStyle(F,this.get(F));this.delegate.get(E).setStyle("zIndex","999");},_handleDragEnd:function(I){this.delegate.get(this.get(C)).setStyle(F,1);this.delegate.get(E).setStyles({top:"",left:""});},plug:function(I,J){this.delegate.dd.plug(I,J);return this;},sync:function(){this.delegate.syncTargets(this.get(B));return this;},destructor:function(){this.delegate.destroy();D.unregSortable(this);},join:function(J,I){if(!(J instanceof G.Sortable)){G.error("Sortable: join needs a Sortable Instance");return this;}if(!I){I="full";}switch(I.toLowerCase()){case"none":this.delegate.dd.removeFromGroup(J.get(B));J.delegate.dd.removeFromGroup(this.get(B));break;case"out":case"outside":case"outter":case"outer":this.delegate.dd.addToGroup(J.get(B));break;case"in":case"inside":case"inner":J.delegate.dd.addToGroup(this.get(B));break;default:this.delegate.dd.addToGroup(J.get(B));J.delegate.dd.addToGroup(this.get(B));break;}return this;}});G.Sortable=D;},"@VERSION@",{requires:["dd-delegate","dd-drop-plugin","dd-proxy"]});