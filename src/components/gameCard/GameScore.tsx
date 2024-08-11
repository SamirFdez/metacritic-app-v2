import React from 'react'
import { View, Text } from 'react-native'
import { GameScoreProps } from '../../interface/gameCard.interface'

export const GameScore = ({ score, maxScore }: GameScoreProps) => {
  const newScore = (score / maxScore) * 10

  const getBgScore = () => {
    if (score < 40) return "bg-red-500"
    if (score < 70) return "bg-yellow-500"
    return "bg-green-500"
  }

  const bgScore = getBgScore()

  return (
    <View className={`${bgScore} justify-center items-center rounded-full w-7 h-6 `}>
      <Text className={`text-md font-semibold ${score > 39 && score < 70 ? "text-black" : "text-white"}`}>{Number(newScore.toFixed(1))}</Text>
    </View>
  )
}
