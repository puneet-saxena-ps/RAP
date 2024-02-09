sap.ui.define(["com/public/storage/pao/utils/reusecontroller","sap/m/BusyDialog","sap/m/MessageToast","sap/ui/model/json/JSONModel","com/public/storage/pao/utils/formatter"],function(e,t,a,n,r){"use strict";var s;return e.extend("com.public.storage.pao.c+
ontroller.InsuranceDetails",{formatter:r,onInit:function(){s=this;const e=this.getRouter();e.getRoute("insDetails").attachMatched(this._onRouteMatched,this);this._oBusyDialog=new t;this.getView().addDependent(this._oBusyDialog);this.model=new n;this.mode+
l.setData({ErentalMaxDays:"None",CddStartDate:"None"});this.getView().setModel(this.model)},_onRouteMatched:function(e){const t=this.getRouter();this.getOwnerComponent.hasChanges=false;const a=this.getOwnerComponent().plant;if(a===undefined){return t.nav+
To("home")}const n=this.getOwnerComponent().LegacyPropertyNumber;this._oModel=sap.ui.getCore().getModel("mainModel");this.readPropertyData(a,n)},onDetectChange:function(e){this.detectChanges()},onPressSaveInsuranceDetails:function(){this._oBusyDialog.ope+
n();const e=this;const t=this.getOwnerComponent().plant;const n=this.getOwnerComponent().LegacyPropertyNumber;let r="T00:00:00";var s=true;let i=this.byId("startdate").getValue().split(".").reverse().join("-");let o=this.byId("finrepD3").getValue().split+
(".").reverse().join("-");let l=this.byId("finrepD4").getValue().split(".").reverse().join("-");let p=this.byId("finrepD5").getValue().split(".").reverse().join("-");let u=this.byId("finrepD6").getValue().split(".").reverse().join("-");let y=this.byId("f+
inrepD7").getValue().split(".").reverse().join("-");let g=this.byId("finrepD8").getValue().split(".").reverse().join("-");let d=this.byId("finrepD9").getValue().split(".").reverse().join("-");let m=this.byId("finrepD10").getValue().split(".").reverse().j+
oin("-");let D=sap.ui.core.format.DateFormat.getDateInstance({pattern:"yyyy-MM-dd"}).format(new Date(o))+r;let c=sap.ui.core.format.DateFormat.getDateInstance({pattern:"yyyy-MM-dd"}).format(new Date(l))+r;let h=sap.ui.core.format.DateFormat.getDateInstan+
ce({pattern:"yyyy-MM-dd"}).format(new Date(p))+r;let f=sap.ui.core.format.DateFormat.getDateInstance({pattern:"yyyy-MM-dd"}).format(new Date(u))+r;let w=sap.ui.core.format.DateFormat.getDateInstance({pattern:"yyyy-MM-dd"}).format(new Date(y))+r;let I=sap+
.ui.core.format.DateFormat.getDateInstance({pattern:"yyyy-MM-dd"}).format(new Date(g))+r;let M=sap.ui.core.format.DateFormat.getDateInstance({pattern:"yyyy-MM-dd"}).format(new Date(d))+r;let V=sap.ui.core.format.DateFormat.getDateInstance({pattern:"yyyy-+
MM-dd"}).format(new Date(m))+r;let b=sap.ui.core.format.DateFormat.getDateInstance({pattern:"yyyy-MM-dd"}).format(new Date(i))+r;o=D==="T00:00:00"?null:D;l=c==="T00:00:00"?null:c;p=h==="T00:00:00"?null:h;u=f==="T00:00:00"?null:f;y=w==="T00:00:00"?null:w;+
g=I==="T00:00:00"?null:I;d=M==="T00:00:00"?null:M;m=V==="T00:00:00"?null:V;i=b==="T00:00:00"?null:b;let F=this.getView().byId("insprem2").getValue();let v=this.getView().byId("insprem3").getValue();let P=this.getView().byId("insprem4").getValue();let C=t+
his.getView().byId("insprem5").getValue();let N=this.getView().byId("eRental").getValue();if(N===null||N===""){this.model.setProperty("/ErentalMaxDays","Error")}else{this.model.setProperty("/ErentalMaxDays","None")}if(N===""){s=true}else{s=false}if(s===f+
alse){const r={FinrepNum1:this.getView().byId("finrep1").getValue(),FinrepNum2:this.getView().byId("finrep2").getValue(),InsPrem2000:F,InsPrem3000:v,InsPrem4000:P,InsPrem5000:C,FinrepNum7:this.getView().byId("finrep7").getValue(),FinrepNum8:this.getView(+
).byId("finrep8").getValue(),FinrepNum9:this.getView().byId("finrep9").getValue(),ErentalMaxDays:N,FinrepDate2:i,FinrepDate3:o,FinrepDate4:l,FinrepDate5:p,FinrepDate6:u,FinrepDate7:y,FinrepDate8:g,FinrepDate9:d,FinrepDate10:m};const s=`/PropertyMasterSet+
(Plant='${t}',LegacyPropertyNumber='${n}')`;this._oModel.update(s,r,{success:function(t){e._oBusyDialog.close();e.getOwnerComponent.hasChanges=false;a.show("Saved Successfully")},error:function(t){e._oBusyDialog.close();a.show("Something went wrong with +
Service")}})}else{this._oBusyDialog.close();a.show("Please Fill all mandatory fields")}}})});                                                                                                                                                                  
//# sourceMappingURL=InsuranceDetails.controller.js.map                                                                                                                                                                                                        