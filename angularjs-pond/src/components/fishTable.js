angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
          <div>
            <fish-table-row ng-repeat = 'fishs in $ctrl.fishes' fish = fishs></fish-table-row>
          </div>`
  });


/* <div>
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
    </div> */