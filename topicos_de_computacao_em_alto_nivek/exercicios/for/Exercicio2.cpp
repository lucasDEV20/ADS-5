#include <stdio.h>

#define TAM 3

int main() {
    int vet[TAM], i, impares = 0;

    //ler valores para o vetor
    for (i = 0; i < TAM; i++) {
        scanf("%i", &vet[i]);
    }

    //mostrar valores do vetor
    printf("Vetor: ");
    for (i = 0; i < TAM; i++) {
        printf("%i ", vet[i]);
    }

    //conta impares
    for (i = 0; i < TAM; i++) {
        if (vet[i]%2 == 1) {   //testa se impar
            impares++;
        }
    }

    printf("\nImpares: %i", impares);

    return 0;
}
