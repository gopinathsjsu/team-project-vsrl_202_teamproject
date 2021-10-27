
const Flight = function(flight) {
    if( typeof flight._id != 'undefined' ) {
        this.id = flight._id;
    }
    this.arrLoc = flight.arrLoc;
    this.deptLoc = flight.email;
    this.arrTime = flight.name;
    this.depTime = flight.password;
    this.status = flight.status;
    this.pilotId=flight.pilotId;
    if( typeof flight.createTimeStamp != 'undefined' ) {
        this.createTimeStamp = flight.createTimeStamp;
    }
    if( typeof flight.modifiedTimeStamp != 'undefined' ) {
        this.modifiedTimeStamp = flight.modifiedTimeStamp;
    }
};