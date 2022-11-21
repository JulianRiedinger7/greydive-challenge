import { useEffect, useState } from 'react';
import { Test } from '../interfaces/test';
import tests from '../data/data.json';


export const useData = () => {
  const [data, setData] = useState<Test[]>([]);

	useEffect(() => {
		setData(tests);
	}, []);
  return {data}
}