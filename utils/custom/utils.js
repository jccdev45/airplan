Date.prototype.toLocalTimeString = function() {
    // Take a date object and return a string of the format:
    // yyyy-mm-ddTHH:MM and return this in local time.
    // This looks like ISO format but ISO format uses GMT.
    let yyyy = this.getFullYear()
    let mm = this.getMonth() < 9 ? '0'+(+this.getMonth()+1) : this.getMonth()+1 // getMonth returns 0-11
    let dd = this.getDate() < 10 ? '0'+this.getDate() : this.getDate()
    let HH = this.getHours() < 10 ? '0'+this.getHours() : this.getHours()
    let MM = this.getMinutes() < 10 ? '0'+this.getMinutes() : this.getMinutes()
    return yyyy+'-'+mm+'-'+dd+'T'+HH+':'+MM
}

Date.prototype.toHHMM = function() {
    // return the datetime object as HHMM string
    let HH = this.getHours() < 10 ? '0'+this.getHours() : this.getHours()
    let MM = this.getMinutes() < 10 ? '0'+this.getMinutes() : this.getMinutes()
    return ''+HH+MM
}