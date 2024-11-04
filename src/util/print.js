import { Console } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import { LOTTO, OUTPUT_MESSAGE } from '../constant/index.js';
import formatCurrency from './formatCurrency.js';

function lottoList(lottoList) {
  Console.print(`\n${lottoList.length}${OUTPUT_MESSAGE.PURCHASE_COUNT}`);
  lottoList.forEach((lotto) => {
    Console.print(`[${lotto.numbers.join(', ')}]`);
  });
}

function winningStatistics() {
  Console.print(OUTPUT_MESSAGE.RESULT_STATISTICS);
  Object.entries(Lotto.matchedCount).forEach(([key, count]) => {
    const label =
      key === '5+bonus' ? '5개 일치, 보너스 볼 일치' : `${key}개 일치`;
    Console.print(
      `${label} (${formatCurrency(LOTTO.WINNING_AMOUNT[key])}) - ${count}개`,
    );
  });
}

function profitRate(purchaseAmount, totalProfit) {
  const fixedRate = ((totalProfit / purchaseAmount) * 100).toFixed(2);
  Console.print(OUTPUT_MESSAGE.TOTAL_PROFIT_RATE(Number(fixedRate)));
}

export default { lottoList, winningStatistics, profitRate };
