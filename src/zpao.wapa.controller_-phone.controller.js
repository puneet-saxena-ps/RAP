sap.ui.define(["com/public/storage/pao/utils/reusecontroller","sap/m/BusyDialog","sap/m/MessageToast","sap/ui/core/Fragment","sap/ui/model/json/JSONModel","com/public/storage/pao/utils/formatter"],function(e,t,o,r,l,s){"use strict";var a;return e.extend(+
"com.public.storage.pao.controller.Phone",{formatter:s,onInit:function(){a=this;const e=this.getRouter();e.getRoute("phone").attachMatched(this._onRouteMatched,this);this._oBusyDialog=new t;this.getView().addDependent(this._oBusyDialog);this.model=new l;+
this.model.setData({direPhoneNo:"None",faxNumber:"None",publishedPhNo:"None",tollfreeNo:"None",localPhoneNo:"None"});this.getView().setModel(this.model)},_onRouteMatched:function(e){const t=this.getRouter();this.getOwnerComponent.hasChanges=false;const o+
=this.getOwnerComponent().plant;if(o===undefined){return t.navTo("home")}const r=this.getOwnerComponent().LegacyPropertyNumber;this._oModel=sap.ui.getCore().getModel("mainModel");this.readPropertyData(o,r);this.readPlantData(o)},readPlantData:function(e)+
{const t=this;const r=`/PlantMasterSet`;this._oBusyDialog.open();this._oModel.read(r,{success:function(o){t._oBusyDialog.close();const r=new l(o.results);const s=r.getData().filter(t=>t.Werks===e);t.getOwnerComponent().getModel("plantsModel").setProperty+
("/Address",s[0].Address);t.getOwnerComponent().getModel("plantsModel").setProperty("/Faxnumber",s[0].Faxnumber);t.getOwnerComponent().getModel("plantsModel").setProperty("/Telnumber",s[0].Telnumber)},error:function(e){t._oBusyDialog.close();o.show("Some+
thing went wrong with Service")}})},onFormatPhoneNumber:function(e){const t=e.getSource().getCustomData()[0].getValue();const o=e.getSource().getValue();let r=o.replace(/\D/g,"");let l=`(${r.substring(0,3)})-${r.substring(3,6)}-${r.substring(6)}`;const s+
=this.getView().getModel("plantBasicDetailsModel");switch(t){case"publishedPhNo1":s.setProperty("/PublishedPhoneNo",l);break;case"tollfreeNo":s.setProperty("/TollFreeNumber",l);break;case"localPhoneNo":s.setProperty("/LocalPhoneNumber",l);break;case"toll+
freeNumber2":s.setProperty("/TollFreeNumber2",l);break;case"tollfreeNumber3":s.setProperty("/TollFreeNumber3",l);break;case"tollfreeNumber4":s.setProperty("/TollFreeNumber4",l);break;case"alarmPhoneNo1":s.setProperty("/AlarmPhoneNumber1",l);break;case"al+
armPhoneNo2":s.setProperty("/AlarmPhoneNumber2",l);break;case"alarmPhoneNumber":s.setProperty("/AlarmPhoneNumber",l);break;case"burglarPhoneNo":s.setProperty("/BurgAlarmPhoneNumber",l);break;case"cellphoneNumber":s.setProperty("/CellPhoneNumber",l);break+
;case"directphoneNumber2":s.setProperty("/DirectPhoneNo2",l);break;case"directphoneNumber3":s.setProperty("/DirectPhoneNo3",l);break;case"extensionNumber":s.setProperty("/ExtensionNumber",l);break;case"officePhoneNumber":s.setProperty("/OfficePhoneNumber+
",l);break;case"publishedPhoneNo2":s.setProperty("/PublishedPhoneNo2",l);break;case"elevatprNo1":s.setProperty("/ElevatorPhoneNo1",l);break;case"elevatprNo2":s.setProperty("/ElevatorPhoneNo2",l);break;case"elevatprNo3":s.setProperty("/ElevatorPhoneNo3",l+
);break;default:break}this.detectChanges()},onPressSavePhoneDetails:function(){this._oBusyDialog.open();const e=this;const t=this.getOwnerComponent().plant;const r=this.getOwnerComponent().LegacyPropertyNumber;let l=this.byId("direPhoneNo").getValue();le+
t s=this.byId("faxNumber").getValue();let a=this.byId("publishedPhNo1").getValue();let n=this.byId("tollfreeNo").getValue();let h=this.byId("localPhoneNo").getValue();let i=this.byId("tollfreeNumber2").getValue();let u=this.byId("tollfreeNumber3").getVal+
ue();let b=this.byId("tollfreeNumber4").getValue();let N=this.byId("alarmPhoneNumber").getValue();let c=this.byId("alarmPhoneNo1").getValue();let m=this.byId("alarmPhoneNo2").getValue();let P=this.byId("burglarPhoneNo").getValue();let d=this.byId("cellph+
oneNumber").getValue();let p=this.byId("directphoneNumber2").getValue();let g=this.byId("directphoneNumber3").getValue();let y=this.byId("elevatprNo1").getValue();let f=this.byId("elevatprNo2").getValue();let w=this.byId("elevatprNo3").getValue();let V=t+
his.byId("extensionNumber").getValue();let D=this.byId("officePhoneNumber").getValue();let I=this.byId("publishedPhoneNo2").getValue();let k=true;if(a===""){this.model.setProperty("/publishedPhNo","Error")}else{this.model.setProperty("/publishedPhNo","No+
ne")}if(n===""){this.model.setProperty("/tollfreeNo","Error")}else{this.model.setProperty("/tollfreeNo","None")}if(h===""){this.model.setProperty("/localPhoneNo","Error")}else{this.model.setProperty("/localPhoneNo","None")}if(a===""||n===""||h===""){k=tr+
ue}else{k=false}if(k===false){const k={DirectPhoneNo:l,FaxNumber:s,PublishedPhoneNo:a,TollFreeNumber:n,LocalPhoneNumber:h,TollFreeNumber2:i,TollFreeNumber3:u,TollFreeNumber4:b,AlarmPhoneNumber:N,AlarmPhoneNumber1:c,AlarmPhoneNumber2:m,BurgAlarmPhoneNumbe+
r:P,CellPhoneNumber:d,DirectPhoneNo2:p,DirectPhoneNo3:g,ElevatorPhoneNo1:y,ElevatorPhoneNo2:f,ElevatorPhoneNo3:w,ExtensionNumber:V,OfficePhoneNumber:D,PublishedPhoneNo2:I};const M=`/PropertyMasterSet(Plant='${t}',LegacyPropertyNumber='${r}')`;this._oMode+
l.update(M,k,{success:function(t){e._oBusyDialog.close();e.getOwnerComponent.hasChanges=false;o.show("Saved Successfully")},error:function(t){e._oBusyDialog.close();o.show("Something went wrong with Service")}})}else{this._oBusyDialog.close();o.show("Ple+
ase Fill all mandatory fields")}}})});                                                                                                                                                                                                                         
//# sourceMappingURL=Phone.controller.js.map                                                                                                                                                                                                                   