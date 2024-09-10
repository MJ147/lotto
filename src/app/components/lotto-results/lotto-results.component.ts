import { Component, OnInit } from '@angular/core';
import { LottoApi } from '../../services/lotto-api';

@Component({
	selector: 'app-lotto-results',
	standalone: true,
	templateUrl: './lotto-results.component.html',
	styleUrls: ['./lotto-results.component.scss'],
})
export class LottoResultsComponent implements OnInit {
	results: any;
	errorMessage: string | undefined;

	constructor(private lottoApi: LottoApi) {}

	ngOnInit(): void {
		this.lottoApi.getAllLottoResults().subscribe(
			(data) => {
				this.results = data;
			},
			(error) => {
				this.errorMessage = 'An error occurred while fetching Lotto results';
			},
		);
	}

	fetchGameResults(gameId: string): void {
		this.lottoApi.getLottoResultsByGame(gameId).subscribe(
			(data) => {
				this.results = data;
			},
			(error) => {
				this.errorMessage = 'Error fetching results for ' + gameId;
			},
		);
	}
}
