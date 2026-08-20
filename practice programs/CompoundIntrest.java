public class CompoundInterest{
    public static void main(String[] args){
        int principal = 40000;
            int time = 5;
            double rate = 0.5;
            int n=11;
            double ammount = principal*Math.pow(1 + (rate / n), n * time);
            double interest = ammount - principal;
            System. out. println("compound intrest after" + time + "years:" + interest);
            System. out. println("Total ammount: " + ammount);
    }
}