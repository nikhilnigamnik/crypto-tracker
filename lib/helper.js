export const formatCurrency = (num) => {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(num);
  return formattedNumber;
};

export const generatePaginationSequence = (currentPage, totalPages) => {
  const sequence = [1];
  let start = Math.max(2, currentPage - 1);
  let end = Math.min(currentPage + 1, totalPages - 1);

  if (start > 2) {
    sequence.push("...");
  }

  for (let i = start; i <= end; i++) {
    sequence.push(i);
  }

  if (end < totalPages - 1) {
    sequence.push("...");
  }

  sequence.push(totalPages);

  return sequence;
};
