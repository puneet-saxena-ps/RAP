sap.ui.define(["com/public/storage/pao/utils/reusecontroller","sap/m/BusyDialog","sap/m/MessageToast","sap/ui/core/Fragment","sap/ui/model/json/JSONModel","com/public/storage/pao/utils/formatter","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/u+
i/model/FilterType"],function(e,t,o,i,n,s,a,l,r){"use strict";var u;return e.extend("com.public.storage.pao.controller.MarketingDetails",{formatter:s,onInit:function(){u=this;const e=this.getRouter();e.getRoute("marketingDetails").attachMatched(this._onR+
outeMatched,this);this._oBusyDialog=new t;this.getView().addDependent(this._oBusyDialog);this.model=new n;this.model.setData({MarketKey:"None",MetroStatisicalArea:"None",Neighborwood:"None",PsConsolidatedPropertygroup:"None"});this.getView().setModel(thi+
s.model)},_onRouteMatched:function(e){const t=this.getRouter();this.getOwnerComponent.hasChanges=false;const o=this.getOwnerComponent().plant;if(o===undefined){return t.navTo("home")}const i=this.getOwnerComponent().LegacyPropertyNumber;this._oModel=sap.+
ui.getCore().getModel("mainModel");this.readPropertyData(o,i);this.readMarketKey();this.readMetroStatArea();this.readNeighborhood();this.readSameStore()},onValueHelpDialogSearchSameStore:function(e){let t=e.getParameter("value");let o=new a("Description"+
,l.Contains,t);let i=new a("Code",l.Contains,t);let n=new a({filters:[o,i],and:false});e.getSource().getBinding("items").filter([n])},onValueHelpDialogSearchMarketKey:function(e){let t=e.getParameter("value");let o=new a("Description",l.Contains,t);let i+
=new a("Code",l.Contains,t);let n=new a({filters:[o,i],and:false});e.getSource().getBinding("items").filter([n])},onValueHelpDialogSearchMetroStats:function(e){let t=e.getParameter("value");let o=new a("Description",l.Contains,t);let i=new a("Code",l.Con+
tains,t);let n=new a({filters:[o,i],and:false});e.getSource().getBinding("items").filter([n])},onValueHelpDialogSearchNeighbour:function(e){let t=e.getParameter("value");let o=new a("Description",l.Contains,t);let i=new a("Code",l.Contains,t);let n=new a+
({filters:[o,i],and:false});e.getSource().getBinding("items").filter([n])},_onValueHelpMarketKey:function(e){this.getOwnerComponent.hasChanges=true;const t=this;const o=this.getView();if(!this._pValueHelpMarketKey){this._pValueHelpMarketKey=i.load({id:o.+
getId(),name:"com.public.storage.pao.fragments.MarketingDetails.MarketKey",controller:this}).then(function(e){o.addDependent(e);return e})}this._oBusyDialog.open();this._pValueHelpMarketKey.then(function(e){t._oBusyDialog.close();e.open()})},_onValueHelp+
MetroStats:function(){this.getOwnerComponent.hasChanges=true;const e=this;const t=this.getView();if(!this._pValueHelpMetroStats){this._pValueHelpMetroStats=i.load({id:t.getId(),name:"com.public.storage.pao.fragments.MarketingDetails.MetroStats",controlle+
r:this}).then(function(e){t.addDependent(e);return e})}this._oBusyDialog.open();this._pValueHelpMetroStats.then(function(t){e._oBusyDialog.close();t.open()})},_onValueHelpNeigbour:function(e){this.getOwnerComponent.hasChanges=true;const t=this;const o=th+
is.getView();if(!this._pValueHelpNeigbour){this._pValueHelpNeigbour=i.load({id:o.getId(),name:"com.public.storage.pao.fragments.MarketingDetails.Neighbour",controller:this}).then(function(e){o.addDependent(e);return e})}this._oBusyDialog.open();this._pVa+
lueHelpNeigbour.then(function(e){t._oBusyDialog.close();e.open()})},_onValueHelpConslidated:function(){this.getOwnerComponent.hasChanges=true;const e=this;const t=this.getView();if(!this._pValueHelpConslidated){this._pValueHelpConslidated=i.load({id:t.ge+
tId(),name:"com.public.storage.pao.fragments.MarketingDetails.SameStore",controller:this}).then(function(e){t.addDependent(e);return e})}this._oBusyDialog.open();this._pValueHelpConslidated.then(function(t){e._oBusyDialog.close();t.open()})},onDetectChan+
ge:function(e){this.detectChanges()},onValueHelpDialogClose:function(e){let t=e.getParameter("selectedItem");let o=e.getSource().getTitle();if(!t){return}let i=t.getDescription();let n=t.getTitle();if(o==="Market Key"){this.getView().getModel("plantBasic+
DetailsModel").setProperty("/MarketKey",`(${n}) ${i}`)}else if(o==="Metro Statistical Area"){this.getView().getModel("plantBasicDetailsModel").setProperty("/MetroStatisicalArea",`(${n}) ${i}`)}else if(o==="Neighbourhood"){this.getView().getModel("plantBa+
sicDetailsModel").setProperty("/Neighborwood",`(${n}) ${i}`)}else if(o==="Same Store"){this.getView().getModel("plantBasicDetailsModel").setProperty("/SameStore",`(${n}) ${i}`)}},onPressSaveMarketingDetails:function(){this._oBusyDialog.open();const e=thi+
s;const t=this.getOwnerComponent().plant;const i=this.getOwnerComponent().LegacyPropertyNumber;let n=this.byId("markKey").getValue();let s=this.byId("metroStats").getValue();let a=this.byId("neighbourwood").getValue();let l=this.byId("rankProp").getSelec+
tedKey();let r=this.byId("psCons").getValue();let u=this.byId("commType").getSelectedItem().getText();let g=true;if(n===""||n===undefined){this.model.setProperty("/MarketKey","Error")}else{this.model.setProperty("/MarketKey","None")}if(s===""||s===undefi+
ned){this.model.setProperty("/MetroStatisicalArea","Error")}else{this.model.setProperty("/MetroStatisicalArea","None")}if(a===""||a===undefined){this.model.setProperty("/Neighborwood","Error")}else{this.model.setProperty("/Neighborwood","None")}if(n===""+
||s===""||a===""||n===undefined||s===undefined||a===undefined||r===undefined){g=true}else{g=false}if(g===false){const g={MarketKey:n,MetroStatisicalArea:s,Neighborwood:a,SameStore:r,Rank:l,CommunityType:u};const d=`/PropertyMasterSet(Plant='${t}',LegacyP+
ropertyNumber='${i}')`;this._oModel.update(d,g,{success:function(t){e._oBusyDialog.close();e.getOwnerComponent.hasChanges=false;o.show("Saved Successfully")},error:function(t){e._oBusyDialog.close();o.show("Something went wrong with Service")}})}else{thi+
s._oBusyDialog.close();o.show("Please Fill all mandatory fields")}}})});                                                                                                                                                                                       
//# sourceMappingURL=MarketingDetails.controller.js.map                                                                                                                                                                                                        