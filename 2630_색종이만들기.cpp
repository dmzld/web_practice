#include <iostream>
#include <cstring>
using namespace std;

int paper[128][128];
int white = 0, blue = 0;

void cut(int n, int sx, int sy){
	int color = paper[sx][sy];
	for (int i = sx; i < sx + n; i++){
		for (int j = sy; j < sy + n; j++){
			if (paper[i][j] != color){
				cut(n / 2, sx, sy);
				cut(n / 2, sx + n / 2, sy);
				cut(n / 2, sx, sy + n / 2);
				cut(n / 2, sx + n / 2, sy + n / 2);
				return;
			}
		}
	}
//	cout << n << "," << sx << "," << sy << "\n";
	if (color == 0)
		white++;
	else
		blue++;
}

int main(){

	int N;

	cin >> N;

	for (int i = 0; i < N; i++){
		for (int j = 0; j < N; j++){
			cin >> paper[i][j];
		}
	}

	cut(N, 0, 0);

	cout << white << "\n" << blue;

	return 0;
}
