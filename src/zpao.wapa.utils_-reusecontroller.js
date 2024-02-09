sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent","sap/ui/core/Fragment","sap/m/MessageToast","sap/ui/model/json/JSONModel","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/ui/model/FilterType","sap/m/MessageBox"],function(e,t+
,o,s,i,n,r,l,c){"use strict";return e.extend("com.public.storage.pao.utils.reusecontroller",{getComponent:function(){return this.getOwnerComponent()},getRouter:function(){return t.getRouterFor(this)},readPropertyData:function(e,t){const o=this.getRouter(+
);const n=this;const r=`/PropertyMasterSet(Plant='${e}',LegacyPropertyNumber='${t}')`;this._oModel.read(r,{success:function(e){const t=new i(e);n.getView().setModel(t,"plantBasicDetailsModel");sap.ui.getCore().setModel(t,"plantBasicDetailsModel");n.getVi+
ew().getModel("plantBasicDetailsModel").refresh()},error:function(e){const t=JSON.parse(e.responseText).error.message.value;if(t.includes("Resource not found for segment")){c.error("Please Save Plant and Property details to procced further.",{title:"Erro+
r",actions:[c.Action.OK],onClose:function(e){o.navTo("home")}})}else{s.show("Something went wrong with the service")}}})},readBuldingDetails:function(e,t){const o=this.byId("idAttributestTab");const n=this;let r=new sap.ui.model.Filter("Plant","EQ",e);le+
t l=new sap.ui.model.Filter("Property","EQ",t);let c=new sap.ui.model.Filter("KeyId","EQ","BUILDING");this._oModel.read(`/PropertyAddOnSet`,{filters:[r,l,c],success:function(e){const t=new i(e.results);n.getView().setModel(t,"buildingModel");sap.ui.getCo+
re().setModel(t,"buildingModel");n.getView().getModel("buildingModel").refresh();o.bindAggregation("items",{path:"buildingModel>/",template:new sap.m.ColumnListItem({cells:[new sap.m.Input({value:"{buildingModel>Code}"}),new sap.m.Input({value:"{building+
Model>Value1}"}),new sap.m.Input({value:"{buildingModel>Value2}"}),new sap.m.Input({value:"{buildingModel>Description1}"}),new sap.m.Input({value:"{buildingModel>Description2}"}),new sap.m.Button({icon:"sap-icon://delete",type:"Reject",press:n.removeBuil+
ding.bind(n)})]})});if(e.results.length){n.getView().byId("illusSection").setVisible(false)}else{n.getView().byId("illusSection").setVisible(true)}},error:function(e){s.show("Something went wrong with Service")}})},MiscBuildingDetails:function(e,t){const+
 o=this.byId("isMiscTab");const n=this;let r=new sap.ui.model.Filter("Plant","EQ",e);let l=new sap.ui.model.Filter("Property","EQ",t);let c=new sap.ui.model.Filter("KeyId","EQ","MISC");this._oModel.read(`/PropertyAddOnSet`,{filters:[r,l,c],success:functi+
on(e){const t=new i(e.results);n.getView().setModel(t,"miscModel");sap.ui.getCore().setModel(t,"miscModel");n.getView().getModel("miscModel").refresh();o.bindAggregation("items",{path:"miscModel>/",template:new sap.m.ColumnListItem({cells:[new sap.m.Inpu+
t({value:"{miscModel>Code}"}),new sap.m.Input({value:"{miscModel>Value1}"}),new sap.m.Input({value:"{miscModel>Value2}"}),new sap.m.Input({value:"{miscModel>Description1}"}),new sap.m.Input({value:"{miscModel>Description2}"}),new sap.m.Button({icon:"sap-+
icon://delete",type:"Reject",press:n.removeMiscBuilding.bind(n)})]})});if(e.results.length){n.getView().byId("illusSectionMisc").setVisible(false)}else{n.getView().byId("illusSectionMisc").setVisible(true)}},error:function(e){s.show("Something went wrong+
 with Service")}})},removeBuilding:function(e){this._oModel=sap.ui.getCore().getModel("mainModel");const t=this;const o=e.getSource().getBindingContext("buildingModel").getObject();const i=`/PropertyAddOnSet(Plant='${o.Plant}',Property='${o.Property}',Ke+
yId='${o.KeyId}',Code='${o.Code}')`;this._oModel.remove(i,{method:"DELETE",success:function(e){s.show("Deleted Successfully");sap.ui.getCore().getModel("buildingModel").refresh();t.readBuldingDetails(o.Plant,o.Property)},error:function(e){s.show("Somethi+
ng went wrong with the Service")}})},removeMiscBuilding:function(e){const t=this;this._oModel=sap.ui.getCore().getModel("mainModel");const o=e.getSource().getBindingContext("miscModel").getObject();const i=`/PropertyAddOnSet(Plant='${o.Plant}',Property='+
${o.Property}',KeyId='${o.KeyId}',Code='${o.Code}')`;this._oModel.remove(i,{method:"DELETE",success:function(e){s.show("Deleted Successfully");sap.ui.getCore().getModel("miscModel").refresh();t.MiscBuildingDetails(o.Plant,o.Property)},error:function(e){s+
.show("Something went wrong with the Service")}})},readBUType:function(){const e=this;var t=new sap.ui.model.Filter("Keyfield","EQ","BUTYPE");this._oBusyDialog.open();e._oModel.read(`/HelpDataSet`,{filters:[t],success:function(t){e._oBusyDialog.close();c+
onst o=new i(t.results);e.getView().setModel(o,"bTypeModel");sap.ui.getCore().setModel(o,"bTypeModel")},error:function(t){e._oBusyDialog.close();s.show("Something went wrong with Service")}})},readActive:function(){const e=this;var t=new sap.ui.model.Fil+
ter("Keyfield","EQ","PECODES");this._oBusyDialog.open();e._oModel.read(`/HelpDataSet`,{filters:[t],success:function(t){e._oBusyDialog.close();const o=new i(t.results);e.getView().setModel(o,"activeModel");sap.ui.getCore().setModel(o,"activeModel")},error+
:function(t){e._oBusyDialog.close();s.show("Something went wrong with Service")}})},readOrgStructure:function(){const e=this;var t=new sap.ui.model.Filter("Keyfield","EQ","ORGSTRUCT");this._oBusyDialog.open();e._oModel.read(`/HelpDataSet`,{filters:[t],su+
ccess:function(t){e._oBusyDialog.close();const o=new i(t.results);e.getView().setModel(o,"orgStructureModel");sap.ui.getCore().setModel(o,"orgStructureModel")},error:function(t){e._oBusyDialog.close();s.show("Something went wrong with Service")}})},readH+
ierarachy:function(){const e=this;var t=new sap.ui.model.Filter("Keyfield","EQ","HIERCODE");this._oBusyDialog.open();e._oModel.read(`/HelpDataSet`,{filters:[t],success:function(t){e._oBusyDialog.close();const o=new i(t.results);e.getView().setModel(o,"hi+
erModel");sap.ui.getCore().setModel(o,"hierModel")},error:function(t){e._oBusyDialog.close();s.show("Something went wrong with Service")}})},readFeeType:function(){const e=this;var t=new sap.ui.model.Filter("Keyfield","EQ","FEEDETAIL");this._oBusyDialog.+
open();e._oModel.read(`/HelpDataSet`,{filters:[t],success:function(t){if(t.results){e._oBusyDialog.close();const o=new i(t.results);e.getView().setModel(o,"feeTypeModel");sap.ui.getCore().setModel(o,"feeTypeModel")}},error:function(t){e._oBusyDialog.clos+
e();s.show("Something went wrong with Service")}})},readAquiredDeveloperTP:function(){const e=this;var t=new sap.ui.model.Filter("Keyfield","EQ","ACQUIREDDEVELOPEDTHIRDPARTY");this._oBusyDialog.open();e._oModel.read(`/HelpDataSet`,{filters:[t],success:fu+
nction(t){e._oBusyDialog.close();const o=new i(t.results);e.getView().setModel(o,"aquiredTpModel");sap.ui.getCore().setModel(o,"aquiredTpModel")},error:function(t){e._oBusyDialog.close();s.show("Something went wrong with Service")}})},readCustomerCode:fu+
nction(){const e=this;var t=new sap.ui.model.Filter("Keyfield","EQ","CUSTCODES");this._oBusyDialog.open();e._oModel.read(`/HelpDataSet`,{filters:[t],success:function(t){e._oBusyDialog.close();const o=new i(t.results);e.getView().setModel(o,"custCodeModel+
");sap.ui.getCore().setModel(o,"custCodeModel")},error:function(t){e._oBusyDialog.close();s.show("Something went wrong with Service")}})},readEntityType:function(){const e=this;var t=new sap.ui.model.Filter("Keyfield","EQ","ENTITYTYPES");this._oBusyDialo+
g.open();e._oModel.read(`/HelpDataSet`,{filters:[t],success:function(t){e._oBusyDialog.close();const o=new i(t.results);e.getView().setModel(o,"entityTypeModel");sap.ui.getCore().setModel(o,"entityTypeModel")},error:function(t){e._oBusyDialog.close();s.s+
how("Something went wrong with Service")}})},readATypeProp:function(){const e=this;var t=new sap.ui.model.Filter("Keyfield","EQ","ATYPEPROPERTIES");this._oBusyDialog.open();e._oModel.read(`/HelpDataSet`,{filters:[t],success:function(t){e._oBusyDialog.clo+
se();const o=new i(t.results);e.getView().setModel(o,"aTypePropModel");sap.ui.getCore().setModel(o,"aTypePropModel")},error:function(t){e._oBusyDialog.close();s.show("Something went wrong with Service")}})},readAvailable3rdpDistribution:function(){const +
e=this;this._oBusyDialog.open();e._oModel.read(`/Available3rdpDistributionSet`,{success:function(t){e._oBusyDialog.close();const o=new i(t.results);e.getView().setModel(o,"availableDistModel");sap.ui.getCore().setModel(o,"availableDistModel")},error:func+
tion(t){e._oBusyDialog.close();s.show("Something went wrong with Service")}})},readMarketClass:function(){const e=this;var t=new sap.ui.model.Filter("Keyfield","EQ","MARKETCLASS");e._oModel.read(`/HelpDataSet`,{filters:[t],success:function(t){const o=new+
 i(t.results);e.getView().setModel(o,"marketClassSetModel");sap.ui.getCore().setModel(o,"marketClassSetModel")},error:function(e){s.show("Something went wrong with Service")}})},readMarketKey:function(){const e=this;var t=new sap.ui.model.Filter("Keyfiel+
d","EQ","MARKET");e._oModel.read(`/HelpDataSet`,{filters:[t],success:function(t){const o=new i(t.results);e.getView().setModel(o,"markeykeyModel");sap.ui.getCore().setModel(o,"markeykeyModel")},error:function(e){s.show("Something went wrong with Service"+
)}})},readMetroStatArea:function(){const e=this;var t=new sap.ui.model.Filter("Keyfield","EQ","METROSTATAREA");e._oModel.read(`/HelpDataSet`,{filters:[t],success:function(t){const o=new i(t.results);e.getView().setModel(o,"metroStatModel");sap.ui.getCore+
().setModel(o,"metroStatModel")},error:function(e){s.show("Something went wrong with Service")}})},readNeighborhood:function(){const e=this;var t=new sap.ui.model.Filter("Keyfield","EQ","NEIGHBORHOOD");e._oModel.read(`/HelpDataSet`,{filters:[t],success:f+
unction(t){const o=new i(t.results);e.getView().setModel(o,"NeighborhoodModel");sap.ui.getCore().setModel(o,"NeighborhoodModel")},error:function(e){s.show("Something went wrong with Service")}})},readPropertyChurnStatus:function(){const e=this;var t=new +
sap.ui.model.Filter("Keyfield","EQ","PROPERTYCHURNSTATUS");e._oModel.read(`/HelpDataSet`,{filters:[t],success:function(t){const o=new i(t.results);e.getView().setModel(o,"churnStatusModel");sap.ui.getCore().setModel(o,"churnStatusModel")},error:function(+
e){s.show("Something went wrong with Service")}})},readClimateControl:function(){const e=this;var t=new sap.ui.model.Filter("Keyfield","EQ","CLIMATECONTROL");e._oModel.read(`/HelpDataSet`,{filters:[t],success:function(t){const o=new i(t.results);e.getVie+
w().setModel(o,"climateControlModel");sap.ui.getCore().setModel(o,"climateControlModel")},error:function(e){s.show("Something went wrong with Service")}})},readConstructionCode:function(){const e=this;var t=new sap.ui.model.Filter("Keyfield","EQ","CONSTR+
UCTIONCODE");e._oModel.read(`/HelpDataSet`,{filters:[t],success:function(t){const o=new i(t.results);e.getView().setModel(o,"ccodeModel");sap.ui.getCore().setModel(o,"ccodeModel")},error:function(e){s.show("Something went wrong with Service")}})},readSam+
eStore:function(){const e=this;var t=new sap.ui.model.Filter("Keyfield","EQ","SAMESTORE");e._oModel.read(`/HelpDataSet`,{filters:[t],success:function(t){const o=new i(t.results);e.getView().setModel(o,"psConsildatePropGroupModel");sap.ui.getCore().setMod+
el(o,"psConsildatePropGroupModel")},error:function(e){s.show("Something went wrong with Service")}})},readRegion:function(){const e=this;e._oModel.read(`/RegionSet`,{success:function(t){const o=new i(t.results);e.getView().setModel(o,"RegionSetModel");sa+
p.ui.getCore().setModel(o,"RegionSetModel")},error:function(e){s.show("Something went wrong with Service")}})},readSeniorDistrict:function(){const e=this;e._oModel.read(`/SrDistrictSet`,{success:function(t){const o=new i(t.results);e.getView().setModel(o+
,"SrDistrictSetModel");sap.ui.getCore().setModel(o,"SrDistrictSetModel")},error:function(e){s.show("Something went wrong with Service")}})},readTaxOwner:function(){const e=this;var t=new sap.ui.model.Filter("Keyfield","EQ","TAXOWNER");this._oBusyDialog.o+
pen();e._oModel.read(`/HelpDataSet`,{filters:[t],success:function(t){e._oBusyDialog.close();const o=new i(t.results);e.getView().setModel(o,"taxOwnerModel");sap.ui.getCore().setModel(o,"taxOwnerModel")},error:function(t){e._oBusyDialog.close();s.show("So+
mething went wrong with Service")}})},readLegalOwner:function(){const e=this;var t=new sap.ui.model.Filter("Keyfield","EQ","LEGALOWNER");this._oBusyDialog.open();e._oModel.read(`/HelpDataSet`,{filters:[t],success:function(t){e._oBusyDialog.close();const +
o=new i(t.results);e.getView().setModel(o,"LegalOwnerModel");sap.ui.getCore().setModel(o,"LegalOwnerModel")},error:function(t){e._oBusyDialog.close();s.show("Something went wrong with Service")}})},readOwnerOfRecord:function(){const e=this;e._oModel.read+
(`/SrDistrictSet`,{success:function(t){const o=new i(t.results);e.getView().setModel(o,"SrDistrictSetModel");sap.ui.getCore().setModel(o,"SrDistrictSetModel")},error:function(e){s.show("Something went wrong with Service")}})},readTaxFillingEntity:functio+
n(){const e=this;e._oModel.read(`/SolarEntitySet`,{success:function(t){const o=new i(t.results);e.getView().setModel(o,"taxFilingModel");sap.ui.getCore().setModel(o,"taxFilingModel")},error:function(e){const t=JSON.parse(e.responseText).error.message.val+
ue;s.show(t)}})},detectChanges:function(){this.getOwnerComponent.hasChanges=true}})});                                                                                                                                                                         
//# sourceMappingURL=reusecontroller.js.map                                                                                                                                                                                                                    