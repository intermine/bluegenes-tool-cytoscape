//add any imports if needed, or write your script directly in this file.
//TODO: IMPORT CYTOSCAPE-INTERMINE
import Cymine from "cytoscape-network";

//make sure to export main, with the signature
export function main (el, service, imEntity, state, config) {
    // sample code here to convert the provided intermine object (e.g. perhaps
    // an id) into an identifier the tool expects. e.g.:

//TODO: CODE FOR PROTEIN
//TODO: CODE FOR GENE
//TODO: Modify the cymine stuff down below

    var columnToConvert = config.columnMapping[imEntity.class][imEntity.format];
    var accession = new imjs.Service(service)
        .findById(imEntity.class, imEntity.value)
        .then(function(response) {
        //put some code here to initialise your tool.
    });

    cymine({
      parentElem : elem,
      service : service,
      queryOn : {
        "value" : "FBgn0034249"
      },
      nodeType : "Gene",
      compact : true //optional
    });



}
