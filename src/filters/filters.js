import Vue from "vue";

Vue.filter("formatoMMSS", value => {
    const hours = Math.floor(value / 60);          
    const minutes = value % 60;
    const hh = hours < 10 ? `0${hours}` : hours;
    const mm = minutes < 10 ? `0${minutes}` : minutes;

    return `${hh}:${mm}`;
});

Vue.filter("separadorCentenas", value => {
    if  (!value)  {
        return  "";
    }
    return  value.toLocaleString();
});
