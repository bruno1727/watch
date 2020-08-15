export class Clock {
    hour: number = 0;
    minutes: number = 0;
    seconds: number = 0;

    public update(milliseconds: number){
        const divRemainder = (milliseconds % (3600 * 1000));  
        this.hour = (milliseconds - divRemainder) / (3600 * 1000) ;

        const divRemainder2 = (divRemainder % (60 * 1000));  
        this.minutes = (divRemainder - divRemainder2) / (60 * 1000) ;

        const divRemainder3 = (divRemainder2 % (1 * 1000));  
        this.seconds = (divRemainder2 - divRemainder3) / (1 * 1000) ;
    }
}
