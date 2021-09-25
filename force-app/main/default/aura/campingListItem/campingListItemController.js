({
	packItem : function(component, event, helper) {
		component.set("v.Packed__c",true);
        component.set("v.disabled",true);
	}
})