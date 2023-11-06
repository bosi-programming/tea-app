import { useState } from 'react';
import { View } from 'react-native';
import { Title } from './src/components/Title';
import { StatusBar } from 'expo-status-bar';
import { Paragraph } from './src/components/Paragraph';
import { Input } from './src/components/Input';
import { Selector } from './src/components/Selector';

const BASE_INFUSION_TIME = {
  '1/10': [10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 480],
  '1/15': [10, 10, 15, 20, 30, 45, 60, 120, 180, 300, 480],
  '1/30': [20, 20, 30, 45, 60, 120, 180, 300, 480],
  '1/50': [120, 180, 300, 480],
  '1/100': [300, 480],
};

const CONCENTRATIONS = [
  { value: 10, label: '1/10' },
  { value: 15, label: '1/15' },
  { value: 30, label: '1/30' },
  { value: 50, label: '1/50' },
  { value: 100, label: '1/100' },
];

export default function App() {
  const [concentration, setConcentration] = useState("");
  const [size, setSize] = useState("");

  return (
    <View className="flex flex-col lg:p-0 lg:justify-center 
      items-center h-full w-full bg-white dark:bg-slate-800">
      <Title titleClassName="pt-20">Tea App</Title>
      <View className="flex flex-col justify-center mt-5 lg:mt-10 w-5/6 max-w-screen-md">
        <Paragraph className="mb-5 lg:mb-10 text-sm">
          Note that the real amount of tea and the infusion time can vary
          depending on the type of tea and the quality of the same. Please
          experiment yourself.
        </Paragraph>
        <View className="w-full lg:w-6/12 lg:mb-10 lg:mt-10 flex flex-col justify-center self-center lg:items-center">
          <Selector
            placeholder="Select a concentration:"
            value={concentration}
            setValue={setConcentration}
            selectorClassName="w-full"
            options={CONCENTRATIONS}
          />
          <Input
            labelChildren="Size of vessel in ml"
            selectedValue={size?.toString()}
            onChangeText={(val) => setSize(Number(val))}
            type="number"
            inputClassName="w-full"
            keyboardType="numeric"
          />
        </View>
        {!concentration ? <Paragraph>Please select a concentration</Paragraph> : null}
        {!size && <Paragraph>Please select a size</Paragraph>}
        {/* TODO remove from form and add timer */}
        {concentration && size && (
          <>
            <Paragraph>
              {Math.ceil(size / concentration).toString()} g
            </Paragraph>
            <Paragraph>
              {
                BASE_INFUSION_TIME[
                  `1/${concentration}`
                ].length
              }{' '}
              steeps:{' '}
              {BASE_INFUSION_TIME[
                `1/${concentration}`
              ].join(', ')}{' '}
              seconds
            </Paragraph>
          </>
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
