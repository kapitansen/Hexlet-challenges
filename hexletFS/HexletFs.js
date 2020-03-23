import path from 'path';
import Tree from '@hexlet/trees';

// BEGIN (write your solution here)
const cleanPath = (filepath) => filepath.replace(/\/\/+/,'/').replace(/^\//,'').replace(/\/$/,'');
const getPathParts = (filepath) => filepath == '' ? [] : filepath.split(path.sep);
// END

export default class {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  // BEGIN (write your solution here)
  isDirectory(filepath) {
    const found = this.findNode(cleanPath(filepath));
    if (found && found.getMeta().type == 'dir') return true;
    return false;
  }

  isFile(filepath) {
    const found = this.findNode(cleanPath(filepath));
    if (found && found.getMeta().type == 'file') return true;
    return false;
  }

  mkdirSync(filepath) {
    const name = path.parse(cleanPath(filepath)).base;
    const pth = path.parse(cleanPath(filepath)).dir;
    if (typeof this.findNode(pth) !== 'undefined' && this.findNode(pth).getMeta().type == 'dir') this.findNode(pth).addChild(name, { type: 'dir' });
    return;
  }

  touchSync(filepath) {
    const name = path.parse(cleanPath(filepath)).base;
    const pth = path.parse(cleanPath(filepath)).dir;
    if (typeof this.findNode(pth) !== 'undefined' && this.findNode(pth).getMeta().type == 'dir') this.findNode(pth).addChild(name, { type: 'file' });
    return;
  }
  // END

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
