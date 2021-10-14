#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define TAM 2

void preencheMatriz(int tam, int mat[tam][tam]) {
    int i, j;
    for (i = 0; i < tam; i++) {
        for (j = 0; j <  tam; j++) {
            mat[i][j] = rand()%2;
        }
    }
}

void mostraMatriz(int tam, int mat[tam][tam]) {
    int i, j;
    for (i = 0; i < tam; i++) {
        for (j = 0; j <  tam; j++) {
            printf("%i ", mat[i][j]);
        }
        printf("\n");
    }
}

int main() {
    srand(time(NULL));

    int m1[TAM][TAM], m2[TAM][TAM], i, j, igual = 1;

    preencheMatriz(TAM, m1);
    preencheMatriz(TAM, m2);

    mostraMatriz(TAM, m1);
    printf("\n");
    mostraMatriz(TAM, m2);

    for (i = 0; i < TAM; i++) {
        for (j = 0; j <  TAM; j++) {
            if (m1[i][j] != m2[i][j]) {
                igual = 0;
            }
        }
    }

    if (igual == 1) {
        printf("Matrizes iguais");
    } else {
        printf("Matrizes diferentes");
    }

    return 0;
}
