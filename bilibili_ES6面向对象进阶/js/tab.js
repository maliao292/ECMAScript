let that = null
class Tab {
    constructor(id) {
        that = this;
        this.main = document.getElementById(id);
        this.ul = this.main.querySelector('ul');
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.fsection = this.main.querySelector('.tabscon');
        this.add = this.main.querySelector('.tabadd');
        this.init()
    }

    // 初始化
    init() {
        this.updateNode();
        this.add.onclick = this.addTab;
        for (let i = 0; i < this.lis.length; i++) {
            that.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.lis[i].firstElementChild.ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
            this.lis[i].querySelector('.icon-guanbi').index = i;
            this.lis[i].querySelector('.icon-guanbi').onclick = this.removeTab;

        }
    }
    updateNode(){
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
    }
    // 切换
    toggleTab() {
        that.clearClass();
        this.setAttribute('class', 'liactive');
        that.sections[this.index].className = 'conactive'

    }
    clearClass(){
        for (let n = 0; n < that.lis.length; n++) {
            // 循环 清除活动 class
            let classNames = that.lis[n].className;
            let newClassName = classNames.replace('liactive', '');
            that.lis[n].setAttribute('class', newClassName);


            let sectionNames = that.sections[n].className;
            sectionNames = classNames.replace('conactive', '');
            that.sections[n].setAttribute('class', sectionNames);
        }
    }
    // 新增
    addTab() {
        let num  = that.lis[that.lis.length-1].index;
        that.ul.insertAdjacentHTML('beforeend',`<li class="liactive"><span>测试${num+2}</span><span class="iconfont icon-guanbi"></span></li>`);
        that.fsection.insertAdjacentHTML('beforeend',`<section class="conactive">测试${Math.random()}</section>`)
        that.clearClass();
        that.init();
    }

    // 删除
    removeTab(event) {
        event.stopPropagation(); // 阻止冒泡
        if(this.index === 0&&/liactive/.exec(that.lis[this.index].className)){
            that.lis[1].setAttribute('class','liactive');
            that.sections[1].setAttribute('class','conactive');
        }else if(this.index !== 0&&/liactive/.exec(that.lis[this.index].className)){
            that.lis[this.index-1].setAttribute('class','liactive');
            that.sections[this.index-1].setAttribute('class','conactive');
        }
        that.lis[this.index].parentNode.removeChild(that.lis[this.index]);
        that.fsection.removeChild(that.sections[this.index]); 
    }

    // 编辑
    editTab() {
        let html = this.innerText;
        this.innerText = '';
        this.insertAdjacentHTML('beforeend','<input value="'+html+'"/>');
        this.firstElementChild.focus();
        this.firstElementChild.select();
        this.firstElementChild.onblur = that.removeInput;
    }
    // 移除input
    removeInput(){
        let text = this.value;
        this.parentNode.innerText = text;
      //  this.parentNode.removeChild(this);
    }
}

new Tab('tab');