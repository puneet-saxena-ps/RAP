sap.ui.define(["com/public/storage/pao/utils/reusecontroller","sap/m/BusyDialog","sap/m/MessageToast","sap/ui/model/json/JSONModel","com/public/storage/pao/utils/formatter","sap/ui/core/Fragment","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/u+
i/model/FilterType"],function(e,t,o,r,s,i,n,a,l){"use strict";var p;return e.extend("com.public.storage.pao.controller.WebDetails",{formatter:s,onInit:function(){p=this;const e=this.getRouter();e.getRoute("webDetails").attachMatched(this._onRouteMatched,+
this);this._oBusyDialog=new t;this.getView().addDependent(this._oBusyDialog);this.model=new r;this.model.setData({PropertyLatitude:"None",PropertyLongitude:"None",PropertyAdminFee:"None",AdminFeeEffectiveDate:"None",PropertyWebsiteReservations:"None",Web+
siteEnabledDate:"None",PropertyCallCenterReservati:"None",CallCenterEnabledDate:"None",PropertyNfsFee:"None",MaxReservationDays:"None",PropertyCallCenterReservati:"None",PropertyNfsAchFee:"None",PropertyInsuranceFrozen:"None",PropertyInsuranceCancelDay:"+
None",PreReservationDays:"None"});this.getView().setModel(this.model)},_onRouteMatched:function(e){this.getOwnerComponent.hasChanges=false;const t=this.getRouter();const o=this.getOwnerComponent().plant;if(o===undefined){return t.navTo("home")}const r=th+
is.getOwnerComponent().LegacyPropertyNumber;this._oModel=sap.ui.getCore().getModel("mainModel");this.readPropertyChurnStatus();this.readClimateControl();this.readPropertyData(o,r)},onValueHelpDialogSearchChurnStatus:function(e){let t=e.getParameter("valu+
e");let o=new n("Description",a.Contains,t);let r=new n("Code",a.Contains,t);let s=new n({filters:[o,r],and:false});e.getSource().getBinding("items").filter([s])},onValueHelpDialogSearchClimateControl:function(e){let t=e.getParameter("value");let o=new n+
("Description",a.Contains,t);let r=new n("Code",a.Contains,t);let s=new n({filters:[o,r],and:false});e.getSource().getBinding("items").filter([s])},_onValueHelpChurnStatus:function(e){this.getOwnerComponent.hasChanges=true;const t=this;const o=this.getVi+
ew();if(!this._pValueHelpChurnStatus){this._pValueHelpChurnStatus=i.load({id:o.getId(),name:"com.public.storage.pao.fragments.WebDetails.ChurnStatus",controller:this}).then(function(e){o.addDependent(e);return e})}this._oBusyDialog.open();this._pValueHel+
pChurnStatus.then(function(e){t._oBusyDialog.close();e.open()})},_onValueHelpClimateControl:function(e){this.getOwnerComponent.hasChanges=true;const t=this;const o=this.getView();if(!this._pValueHelpClimateControl){this._pValueHelpClimateControl=i.load({+
id:o.getId(),name:"com.public.storage.pao.fragments.WebDetails.ClimateControl",controller:this}).then(function(e){o.addDependent(e);return e})}this._oBusyDialog.open();this._pValueHelpClimateControl.then(function(e){t._oBusyDialog.close();e.open()})},onV+
alueHelpDialogClose:function(e){let t=e.getParameter("selectedItem");let o=e.getSource().getTitle();e.getSource().getBinding("items").filter([]);if(!t){return}let r=t.getDescription();let s=t.getTitle();if(o==="Property Churn Status"){this.getView().getM+
odel("plantBasicDetailsModel").setProperty("/PropertyChurnStatus",`(${s}) ${r}`);this.getView().getModel("plantBasicDetailsModel").setProperty("/churnStatusDesc",`${r}`)}else if(o==="Climate Control"){this.getView().getModel("plantBasicDetailsModel").set+
Property("/ClimateControl",`(${s}) ${r}`);this.getView().getModel("plantBasicDetailsModel").setProperty("/climateControlDesc",`${r}`)}},onDetectChange:function(e){this.detectChanges()},onPressSaveWebDetails:function(){this._oBusyDialog.open();const e=thi+
s;const t=this.getOwnerComponent().plant;const r=this.getOwnerComponent().LegacyPropertyNumber;var s=true;const i=e=>{const t=this.byId(e).getValue();const o=t.split(".").reverse().join("-");const r=o!=="--"?sap.ui.core.format.DateFormat.getDateInstance(+
{pattern:"yyyy-MM-dd"}).format(new Date(o))+"T00:00:00":null;return r};let n=this.getView().byId("propLat").getValue();let a=this.getView().byId("propLong").getValue();let l=this.getView().byId("propAdmin").getValue();let p=this.getView().byId("propWeb")+
.getSelectedKey();let u=this.getView().byId("propCall").getSelectedKey();let y=this.getView().byId("propNFS").getValue();let h=this.getView().byId("maxRes").getValue();let d=this.getView().byId("propNFSACH").getValue();let g=this.getView().byId("propFroz+
en").getSelectedKey();let c=this.getView().byId("propIns").getValue();let m=this.getView().byId("propResDay").getValue();if(n===""){this.model.setProperty("/PropertyLatitude","Error")}else{this.model.setProperty("/PropertyLatitude","None")}if(a===""){thi+
s.model.setProperty("/PropertyLongitude","Error")}else{this.model.setProperty("/PropertyLongitude","None")}if(l===""){this.model.setProperty("/PropertyAdminFee","Error")}else{this.model.setProperty("/PropertyAdminFee","None")}if(p===""||p==="B"){this.mod+
el.setProperty("/PropertyWebsiteReservations","Error")}else{this.model.setProperty("/PropertyWebsiteReservations","None")}if(u===""||u==="B"){this.model.setProperty("/PropertyCallCenterReservati","Error")}else{this.model.setProperty("/PropertyCallCenterR+
eservati","None")}if(y===""){this.model.setProperty("/PropertyNfsFee","Error")}else{this.model.setProperty("/PropertyNfsFee","None")}if(h===""){this.model.setProperty("/MaxReservationDays","Error")}else{this.model.setProperty("/MaxReservationDays","None"+
)}if(d===""){this.model.setProperty("/PropertyNfsAchFee","Error")}else{this.model.setProperty("/PropertyNfsAchFee","None")}if(g===""){this.model.setProperty("/PropertyInsuranceFrozen","Error")}else{this.model.setProperty("/PropertyInsuranceFrozen","None"+
)}if(c===""){this.model.setProperty("/PropertyInsuranceCancelDay","Error")}else{this.model.setProperty("/PropertyInsuranceCancelDay","None")}if(m===""){this.model.setProperty("/PreReservationDays","Error")}else{this.model.setProperty("/PreReservationDays+
","None")}if(n===""||a===""||l===""||p===""||p==="B"||u===""||u==="B"||y===""||h===""||d===""||g===""||c===""||m===""){s=true}else{s=false}if(s===false){const s={PropertyLatitude:this.getView().byId("propLat").getValue(),PropertyLongitude:this.getView().+
byId("propLong").getValue(),PropertyAdminFee:this.getView().byId("propAdmin").getValue(),AdminFeeEffectiveDate:i("effDate"),PropertyChurnStatus:this.getView().byId("propChurn").getValue(),ClimateControl:this.getView().byId("climControl").getValue(),Prope+
rtyWebsiteReservations:this.getView().byId("propWeb").getSelectedKey(),WebsiteEnabledDate:i("webenabled"),PropertyCallCenterReservati:this.getView().byId("propCall").getSelectedKey(),CallCenterEnabledDate:i("callCenter"),PropertyNfsFee:this.getView().byI+
d("propNFS").getValue(),MaxReservationDays:this.getView().byId("maxRes").getValue(),NsfFeeEffectiveDate:i("nsfFeeEff"),PropertyNfsAchFee:this.getView().byId("propNFSACH").getValue(),NfsAchFeeEffectiveDate:i("nfsAshfeeeff"),PropertyInsuranceFrozen:this.ge+
tView().byId("propFrozen").getSelectedKey(),PropertyInsuranceCancelDay:this.getView().byId("propIns").getValue(),PreReservationDays:this.getView().byId("propResDay").getValue()};const n=`/PropertyMasterSet(Plant='${t}',LegacyPropertyNumber='${r}')`;this.+
_oModel.update(n,s,{success:function(t){e.getOwnerComponent.hasChanges=false;o.show("Saved Successfully");e._oBusyDialog.close()},error:function(t){o.show("Something went wrong with Service");e._oBusyDialog.close()}})}else{this._oBusyDialog.close();o.sho+
w("Please Fill all mandatory fields")}}})});                                                                                                                                                                                                                   
//# sourceMappingURL=WebDetails.controller.js.map                                                                                                                                                                                                              