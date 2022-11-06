import type { NextApiRequest, NextApiResponse } from "next";
import { Instrument, APIResponse } from "@/types/api.d";
import axios from "axios";

export const TEST_RESULT = [
  {
    id: 1,
    name: "Ethereum",
    symbol: "ETH",
    value: "$183.34K",
    amount: 70.4205153,
  },
  {
    id: 2,
    name: "Tron",
    symbol: "TRX",
    value: "$125.89K",
    amount: 2141105.43,
  },
  {
    id: 3,
    name: "Bitcoin",
    symbol: "BTC",
    value: "$183.34K",
    amount: 70.4205153,
  },
  {
    id: 4,
    name: "Ethereum",
    symbol: "ETH",
    value: "$183.34K",
    amount: 70.4205153,
  },
  {
    id: 5,
    name: "Tron",
    symbol: "TRX",
    value: "$183.34K",
    amount: 70.4205153,
  },
  {
    id: 6,
    name: "Bitcoin",
    symbol: "BTC",
    value: "$183.34K",
    amount: 70.4205153,
  },
  {
    id: 7,
    name: "Ethereum",
    symbol: "ETH",
    value: "$183.34K",
    amount: 70.4205153,
  },
  {
    id: 8,
    name: "Tron",
    symbol: "TRX",
    value: "$183.34K",
    amount: 70.4205153,
  },
  {
    id: 9,
    name: "Bitcoin",
    symbol: "BTC",
    value: "$183.34K",
    amount: 70.4205153,
  },
  {
    id: 10,
    name: "Ethereum",
    symbol: "ETH",
    value: "$183.34K",
    amount: 70.4205153,
  },
  {
    id: 11,
    name: "Tron",
    symbol: "TRX",
    value: "$183.34K",
    amount: 70.4205153,
  },
  {
    id: 12,
    name: "Bitcoin",
    symbol: "BTC",
    value: "$183.34K",
    amount: 70.4205153,
  },
  {
    id: 13,
    name: "Ethereum",
    symbol: "ETH",
    value: "$183.34K",
    amount: 70.4205153,
  },
  {
    id: 14,
    name: "Tron",
    symbol: "TRX",
    value: "$183.34K",
    amount: 70.4205153,
  },
  {
    id: 15,
    name: "Bitcoin",
    symbol: "BTC",
    value: "$183.34K",
    amount: 70.4205153,
  },
];

export default async (
  req: NextApiRequest,
  res: NextApiResponse<APIResponse<Instrument>>
) => {
  let result = [];
  try {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "07274206-5abe-4447-8081-4a50671464a0",
        },
      }
    );
    result = response.data.data.map((coin) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      value: `$${Math.round(coin.quote.USD.price)}`,
      amount: Math.floor(Math.random() * 100),
    }));
  } catch (e) {
    result = [];
  }

  return res.status(200).setHeader("Cache-Control", "no-cache").json({
    success: true,
    result,
  });
};
