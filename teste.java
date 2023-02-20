import java.util.Scanner;

public class teste {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        double valor;
        double soma = 0;
        boolean valido = false;
        

        do {
            System.out.println("Digite o valor da compra e zero para sair");
            valor = scan.nextDouble();

            if (valor > 0) {
                soma += valor;
                valido = true;
                                
            }else if (valor < 0){
                System.out.println("O valor nao pode ser menor que zero digite novamente");
                valido = true;
                
            }else{
                valido = false;
            }

        } while (valido);

        double precoComDesconto = soma - (soma * 15 / 100)  ;

        if(soma >= 1000){
            System.out.println("valor da compra com desconto " + precoComDesconto);
                       
        }else{
            System.out.println("valor da  compra sem desconto " + soma);

        }

        scan.close();

    }

}
