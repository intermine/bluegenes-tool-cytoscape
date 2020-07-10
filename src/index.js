import Cymine from "@intermine/cytoscape-intermine";

//make sure to export main, with the signature
export function main(el, service, entity, state, config) {
  var imEntity = entity.Gene || entity.Protein;

  var paths = {"Gene" : "Gene.id", "Protein" : "Gene.proteins.id"},
      initOptions = {
    parentElem: el,
    service: service,
    queryOn: {
      "value": imEntity.value,
      "op": "=",
      "path" : paths[imEntity.class]
    },
    nodeType: imEntity.class,
    compact: true //optional
  }
  //
  Cymine(initOptions);
}
