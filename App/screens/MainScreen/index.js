import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native';
import {
  Container,
  Header,
  Input,
  Confirm,
  Title,
  SelectSort,
  ConfirmText,
  Info,
  Reset
} from './styles';

import ListItem from './ListItem';

export default class MainScreen extends Component {
  state = {
    sort: 0,
    sorting: false,
    list: [
      {
        number: 6,
        using: false,
      },
      {
        number: 2,
        using: false,
      },
      {
        number: 5,
        using: false,
      },
      {
        number: 4,
        using: false,
      },
      {
        number: 3,
        using: false,
      },
      {
        number: 7,
        using: false,
      },
      {
        number: 18,
        using: false,
      },
      {
        number: 12,
        using: false,
      },
      {
        number: 9,
        using: false,
      },
      {
        number: 15,
        using: false,
      },
      {
        number: 10,
        using: false,
      },
      {
        number: 1,
        using: false,
      },
    ],
  };
  sortType = () => {
    const {sort, list} = this.state;
    this.setState({list}, () => {
      if (sort === 1) {
        this.insertionSort();
      } else if (sort === 2) {
        this.bubbleSort();
      } else {
        this.selectionSort();
      }
    });
  };

  timeout = async ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  setList = list => {
    this.setState({list});
  };

  insertionSort = async () => {
    const {list} = this.state;
    let len = list.length;
    for (let i = 1; i < len; i++) {
      let current = list[i].number;
      list[i].using = true;
      let j;
      for (j = i - 1; j >= 0 && list[j].number > current; j--) {
        list[j].using = true;
        list[j + 1].using = true;
        list[j + 1].number = list[j].number;
        console.log('dentro', list);

        list[j].using = false;
        list[j + 1].using = false;
      }

      list[i].using = false;
      list[j + 1].number = current;
      list[j + 1].using = true;
    }
    await this.setList(list);
  };

  selectionSort = async () => {
    const {list} = this.state;

    let length = list.length;
    for (let i = 0; i < length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < length; j++) {
        if (list[j].number < list[min].number) {
          min = j;
        }
      }
      if (min !== i) {
        let tmp = list[i];
        list[i] = list[min];
        list[min] = tmp;
      }
    }
    await this.setList(list);
  };

  bubbleSort = async () => {
    const {list} = this.state;
    let length = list.length;
    for (let i = length - 1; i > 0; i--) {
      for (let j = length - i; j > 0; j--) {
        if (list[j].number < list[j - 1].number) {
          let tmp = list[j];
          list[j] = list[j - 1];
          list[j - 1] = tmp;
        }
      }
    }
    await this.setList(list);
  };

  reset = () => {
    const list = [
      {
        number: 6,
        using: false,
      },
      {
        number: 2,
        using: false,
      },
      {
        number: 5,
        using: false,
      },
      {
        number: 4,
        using: false,
      },
      {
        number: 3,
        using: false,
      },
      {
        number: 7,
        using: false,
      },
      {
        number: 18,
        using: false,
      },
      {
        number: 12,
        using: false,
      },
      {
        number: 9,
        using: false,
      },
      {
        number: 15,
        using: false,
      },
      {
        number: 10,
        using: false,
      },
      {
        number: 1,
        using: false,
      },
    ];

    this.setState({list});
  }

  render() {
    const {sort, sorting, list, refreshing} = this.state;

    // if (sorting) {
    //   let len = list.length;
    //   for (let i = 1; i < len; i++) {
    //     let tmp = list[i].number;
    //     list[i].using = true;
    //     let j; //Copy of the current element.
    //     for (j = i - 1; j >= 0 && list[j].number > tmp; j--) {
    //       // setTimeout(() => {
    //       //Shift the number
    //       list[j + 1].using = true;
    //       list[j + 1].number = list[j].number;
    //       // }, 20000);
    //       list[j + 1].using = false;
    //     }
    //     //Insert the copied number at the correct position
    //     //in sorted part.
    //     list[i].using = false;
    //     list[j + 1].number = tmp;
    //     list[j + 1].using = true;
    //   }
    console.log('lista teoricamente arrumada!', list);
    // }
    return (
      <>
        <Header>
          <Title>Lista 2!!</Title>
        </Header>
        <Container>
          {sorting ? (
            <FlatList
              data={list}
              refreshing={refreshing}
              renderItem={({item}) => <ListItem item={item} />}
              keyExtractor={(item, index) => String(index)}
              numColumns={5}
            />
          ) : (
            <>
              <Info>Selecione as opções desejadas</Info>
              <Input placeholder="Tamanho da lista" />
              <SelectSort
                extraData={this.state}
                selectedValue={sort}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({sort: itemValue})
                }>
                <SelectSort.Item label="Selection Sort" value={0} />
                <SelectSort.Item label="Insertion Sort" value={1} />
                <SelectSort.Item label="Bubble Sort" value={2} />
              </SelectSort>
              <Reset onPress={this.reset}>
                <ConfirmText>Resetar valores</ConfirmText>
              </Reset>
            </>
          )}
          <Confirm
            onPress={() => {
              this.setState({sorting: !sorting});
              this.sortType();
            }}>
            <ConfirmText>{sorting ? 'Parar ' : 'Iniciar '}</ConfirmText>
            <Icon name="rocket" size={30} />
          </Confirm>
        </Container>
      </>
    );
  }
}
