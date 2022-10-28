const blogLog = async (event) => {
    event.preventDefault();

    const response = await fetch('/log', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
  };
  