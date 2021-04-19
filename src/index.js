import Cymine from "@intermine/cytoscape-intermine";

//make sure to export main, with the signature
export function main(el, service, entity, state, config) {
  var imEntity = entity.Gene || entity.Protein;

  // We attach to this element to fix the CSS, as cytoscape-intermine expects
  // `el` to be inside the element with the CSS class, while they are both the
  // same element in modern Bluegenes tools.
  var innerElem = document.createElement('div');
  el.appendChild(innerElem);

  var paths = {"Gene" : "Gene.id", "Protein" : "Gene.proteins.id"},
      initOptions = {
    parentElem: innerElem,
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
