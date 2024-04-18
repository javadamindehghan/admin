import { Button } from "@mui/material";
import Header from "./components/Header";
import Item from './components/dashboard/card'
import TransactionsPerDay from "./components/dashboard/transactionsPerday/TransactionsPerDay";
import TransactionsBottomRow from "./components/dashboard/transactionsBottomRow/transactionsBottomRow";
import Test from "./components/test";

export default function Home() {
  return (
    <>
    <Item/>
    <TransactionsPerDay/>
    <TransactionsBottomRow/>
    
    
    
    
    </>
  );
}
