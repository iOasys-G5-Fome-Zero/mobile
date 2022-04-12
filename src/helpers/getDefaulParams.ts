export const getDefaulSize = (size: string) => {
  if (size.startsWith('P')) {
    return 'small';
  }

  if (size.startsWith('M')) {
    return 'medium';
  }

  if (size.startsWith('G')) {
    return 'big';
  }
};

export const getDefaultFrequency = (frequency: string) => {
  if (frequency.startsWith('S')) {
    return '7';
  }

  if (frequency.startsWith('Q')) {
    return '15';
  }
};
