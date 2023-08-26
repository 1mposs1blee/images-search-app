import { useState } from 'react';

export const useAppState = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);
  const [per_page] = useState(12);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [openModals, setOpenModals] = useState({});

  const resetState = () => {
    setSearchQuery('');
    setResult([]);
    setPage(1);
    setTotalPage(0);
    setIsLoading(false);
    setOpenModals({});
  };

  return {
    searchQuery,
    setSearchQuery,
    result,
    setResult,
    page,
    setPage,
    per_page,
    totalPage,
    setTotalPage,
    isLoading,
    setIsLoading,
    openModals,
    setOpenModals,
    resetState,
  };
};
