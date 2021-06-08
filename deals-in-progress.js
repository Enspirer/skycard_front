const select = document.querySelectorAll('.table-select');
select[0].onchange = function () {
    select[0].className = 'form-control table-select ' + this.options[this.selectedIndex].className;
}
select[1].onchange = function () {
    select[1].className = 'form-control table-select ' + this.options[this.selectedIndex].className;
}
select[2].onchange = function () {
    select[2].className = 'form-control table-select ' + this.options[this.selectedIndex].className;
}
select[3].onchange = function () {
    select[3].className = 'form-control table-select ' + this.options[this.selectedIndex].className;
}
select[4].onchange = function () {
    select[4].className = 'form-control table-select ' + this.options[this.selectedIndex].className;
}
select[5].onchange = function () {
    select[5].className = 'form-control table-select ' + this.options[this.selectedIndex].className;
}
select[6].onchange = function () {
    select[6].className = 'table-select ' + this.options[this.selectedIndex].className;
}