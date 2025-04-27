type GridListProps<T> = {
    records: T[];
    renderItem: (record: T) => JSX.Element;
  };
  
  const GridList2 = <T extends { id?: string }>({
    records,
    renderItem,
  }: GridListProps<T>) => {
    const renderList =
      records.length > 0 ? (
        records.map((record) => (
          <div
            key={record.id}
            
          >
            {renderItem(record)}
          </div>
        ))
      ) : (
        <div className="">Loading....</div>
      );
    return (
      <>
        {renderList}
      </>
    );
  };
  
  export default GridList2;
  