/**
 * @NApiVersion 2.0
 * @NScriptType UserEventScript
 */
 define(['N/record', 'N/file', 'N/url', 'N/log', 'N/search', 'N/redirect', 'N/task', 'N/error', 'N/runtime', 'N/format', 'N/email'],
 function(record, file, url, serverWidget, log, search, redirect, task, error, runtime, format, moment, email) {
 
     /**
      * Function definition to be triggered before record is loaded.
      *
      * @param {Object} scriptContext
      * @param {Record} scriptContext.newRecord - New record
      * @param {string} scriptContext.type - Trigger type
      * @param {Form} scriptContext.form - Current form
      * @Since 2015.2
      */
     function beforeload(scriptContext) {
        var NewRecord=scriptContext.newRecord;
         if (scriptContext.type == 'create' || scriptContext.type == 'copy') {

            NewRecord.setValue({
                fieldId:"name",
                value: "Andriya Maria Dcosta"   
            })
          
         }
     }
     /**
         * Function definition to be triggered before record is loaded.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type
         * @Since 2015.2
         */
     function beforesubmit(scriptContext) {
        
        var NewRecord=scriptContext.newRecord;
         if (scriptContext.type == 'create' || scriptContext.type == 'copy') {
            var udupi = NewRecord.getValue({
                fieldId: "custrecord_andriya3_contact"
            });
            NewRecord.setValue({
                fieldId:"custrecord_andriya3_contact",
                value: "1234567890"   
            })
          
         }
     }
     /**
        * Function definition to be triggered before record is loaded.
        *
        * @param {Object} scriptContext
        * @param {Record} scriptContext.newRecord - New record
        * @param {Record} scriptContext.oldRecord - Old record
        * @param {string} scriptContext.type - Trigger type
        * @Since 2015.2
        */
     function aftersubmit(scriptContext) {
         
        var NewRecord = scriptContext.newRecord;
        var id = NewRecord.getValue({
            fieldId: "name"
        });
        email.send({
            author: "1717",
            recipients: "andriya@kpi.co",
            subject: "This is 2.0 Sub",
            body: "Your clothes id is: "+id,
        });
     }

     return {
         beforeLoad: beforeload,
        //  beforeSubmit: beforesubmit,
        //  afterSubmit: aftersubmit
     };
 });