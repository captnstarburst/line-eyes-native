import React, {useState, useEffect} from 'react';
import PhotoPageJSX from './PhotoPage';
import * as RAW_TAG_DATA from '../constants/RawTagData';

const PhotoPage = () => {
  const [chipData, setChipData] = useState([RAW_TAG_DATA.getTestType()]);

  const [addTopic, setAddTopic] = useState(null);
  useEffect(() => {
    if (addTopic) {
      let updatedTopics = [];
      switch (addTopic) {
        case 'Pregnancy_Test':
          updatedTopics = [
            chipData[0],
            RAW_TAG_DATA.getDaysPastOvulation(),
            RAW_TAG_DATA.getDaysPastTransfer(),
            RAW_TAG_DATA.getCycleDays(),
          ];

          setChipData(updatedTopics);
          break;
        case 'Ovulation_Test':
          updatedTopics = [chipData[0], RAW_TAG_DATA.getCycleDays()];

          setChipData(updatedTopics);
          break;
        // case "Cycle_Day":
        // case "Days_Past_Ovulation":
        // case "Days_Past_Transfer":
        //   setMountUpload(true);
        //   break;
        default:
          break;
      }

      setAddTopic(null);
    }
  }, [addTopic, chipData]);

  const handleChipSelection = (id) => {
    let indices = [];
    let dataCopy = [...chipData];
    chipData.forEach((topicArrays, topicIndex) => {
      if (indices.length > 0) return;
      topicArrays.forEach((item, itemIndex) => {
        if (indices.length > 0) return;
        if (item.label === id) indices = [topicIndex, itemIndex];
      });
    });

    let updatedTopicArray = [];

    updatedTopicArray.push(
      chipData[indices[0]].map((item, itemIndex) => {
        if (itemIndex === 0) return {key: item.key, header: id, id: item.id};
        if (itemIndex === indices[1])
          return {key: item.key, label: item.label, viewing: true};
        return {key: item.key, label: item.label, viewing: false};
      }),
    );

    if (dataCopy.length === 4) dataCopy.splice(1, 2, ...updatedTopicArray);
    else dataCopy.splice(indices[0], indices[0] + 1, ...updatedTopicArray);

    setChipData(dataCopy);

    if (chipData[indices[0]][0].id === 'Test_Type') {
      setAddTopic(id);
    } else {
      setAddTopic(chipData[indices[0]][0].id);
    }
  };

  const handleChipDeletion = (id) => {
    let indices = [];
    let dataCopy = [...chipData];
    chipData.forEach((topicArrays, topicIndex) => {
      if (indices.length > 0) return;
      topicArrays.forEach((item, itemIndex) => {
        if (indices.length > 0) return;
        if (item.label === id) indices = [topicIndex, itemIndex];
      });
    });

    let updatedTopicArray = [];

    updatedTopicArray.push(
      chipData[indices[0]].map((item, itemIndex) => {
        if (itemIndex === 0)
          return {key: item.key, header: item.id, id: item.id};

        return {key: item.key, label: item.label, viewing: false};
      }),
    );

    if (id === 'Ovulation_Test') {
      dataCopy.pop();
    } else if (id === 'Pregnancy_Test') {
      dataCopy.pop();
      dataCopy.pop();
      dataCopy.pop();
    }

    dataCopy.splice(indices[0], indices[0] + 1, ...updatedTopicArray);

    if (id.substring(2, 5) === 'DPO') {
      dataCopy.push(RAW_TAG_DATA.getDaysPastTransfer());
      dataCopy.push(RAW_TAG_DATA.getCycleDays());
    } else if (id.substring(2, 5) === 'DPT') {
      dataCopy.push(RAW_TAG_DATA.getDaysPastOvulation());
      dataCopy.push(RAW_TAG_DATA.getCycleDays());
    }

    setChipData(dataCopy);
  };

  return (
    <PhotoPageJSX
      chipData={chipData}
      handleChipSelection={handleChipSelection}
      handleChipDeletion={handleChipDeletion}
    />
  );
};

export default PhotoPage;
