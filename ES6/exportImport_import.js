import { square, add } from './exportImport_export.js';
console.log(square(10)); //100
console.log(add(2, 4)); //6




// todo 引入方式  type 须为 module       type="module"
// todo <script type="module">
// todo  import {addTextToBody} from './utils.mjs';
// todo  addTextToBody('Modules are pretty cool.');
// todo</script>


//Supported (支持 的引入方式):
/*
import {foo} from 'https://jakearchibald.com/utils/bar.mjs';
import {foo} from '/utils/bar.mjs';
import {foo} from './bar.mjs';
import {foo} from '../bar.mjs';
*/

// Not supported （不支持 的引入方式）:
/*
import {foo} from 'bar.mjs';
import {foo} from 'utils/bar.mjs';
*/
