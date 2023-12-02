
#include <stdio.h>
#include <stdlib.h>

int main(){
    
    int N, M;
    
    printf("Digite o número de linhas (N) das matrizes: ");
    scanf("%d", &N);
    printf("Digite o número de colunas (M) das matrizes: ");
    scanf("%d", &M);
    
    double **matriz1 = (double **)malloc(M * sizeof(double*));
    double **matriz2 = (double **)malloc(M * sizeof(double*));
    double **somaMatrizes = (double **)malloc(M * sizeof(double *));
    
    
    for(int i = 0; i < M; i++){
        matriz1[i] = (double *)malloc(N * sizeof(double));
        matriz2[i] = (double *)malloc(N * sizeof(double));
        somaMatrizes[i] = (double *)malloc(N * sizeof(double));
        
        
    }
    
    printf("Digite os elementos da primeira matriz: \n");
    for(int i = 0; i < M; i++){
        for(int j = 0; j < N; j++){
            printf("Matriz1[%d][%d]: ", i, j);
            scanf("%lf", &matriz1[i][j]);
        }
    }
    
    printf("Digite os elementos da segunda matriz:\n");
    for(int i  = 0; i < M; i++){
        for(int j = 0; j < N; j++){
            printf("Matriz2[%d][%d]: ", i, j);
            scanf("%lf", &matriz2[i][j]);
        }
    }
    
    for(int i = 0; i < M; i++){
        for(int j = 0; j < N; j++){
            somaMatrizes[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }
    
    printf("Matriz resultante (soma das matrizes):\n");
    for(int i = 0; i < M; i++){
        for(int j = 0; j < N; j++){
            printf("%.2lf\t", somaMatrizes[i][j]);
        }
        printf("\n");
    }
    
    for(int i = 0; i < M; i++){
        free(matriz1[i]);
        free(matriz2[i]);
        free(somaMatrizes[i]);
    }
    
    free(matriz1);
    free(matriz2);
    free(somaMatrizes);
    
    
    
 return 0;

}
