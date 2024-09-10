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
		this.lottoApi.getLottoResultsByGame().subscribe((data) => {
			this.results = data;
			console.log(data);
		});
	}

	fetchGameResults(gameId: string): void {
		// this.lottoApi.getLottoResultsByGame(gameId).subscribe(
		// 	(data) => {
		// 		this.results = data;
		// 	},
		// 	(error) => {
		// 		this.errorMessage = 'Error fetching results for ' + gameId;
		// 	},
		// );
	}
}
