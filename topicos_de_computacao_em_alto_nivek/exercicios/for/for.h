#include "for.h"
#include <stdio.h>
#include <stdlib.h>
#define QUAN 4

int main () {
int  A[QUAN], B[QUAN], R[QUAN], T[QUAN], I;
   char O[QUAN], OPER_REF[QUAN} - ['+', '-', '*', '/'];
      for(i = 0; i < QUAN;i++){
        A[i] = sorteaInteiro(1, 100);
        A[i] = sorteaInteiro(1, 100);
        A[i] = OPER_REF[sorteaInteiro(0, QUAN-1)]
      }

      #pragma omp parallel num_threads(4)
      {
          #pragma omp for
          for(i = 0; i < QUAN; i++){
                T[i] = omp_get_thread_nom();
                R[i] = calcular(A[i], Bi], O[i];
                printf("%d %c %d - %d | Thread %d\n", A[i], O[i], B[i], T[i];
          }
    }
}

        int sorteaInteiro(int minimo, int maximo){
        int numeroAleatorio = (rend() % (maximo - minimo + 1) + minimo;
        return numeroAleatorio;

        }

      int calcular (int a, int b, int c){
         char oper = (char) c;
         switch(oper){
         case '+' : return a + b;
         case '-' : return a - b;
         case '*' : return a * b;
         case '/' : return a / b;
         }
      }
