import type { UserProfile, NutritionTargets } from '../types'

export const getImcClassification = (imc: number) => {
  if (imc < 18.5) return { label: 'Abaixo do peso', colorScheme: 'yellow' }
  if (imc < 25)   return { label: 'Peso normal',    colorScheme: 'green'  }
  if (imc < 30)   return { label: 'Sobrepeso',      colorScheme: 'orange' }
  return                  { label: 'Obesidade',      colorScheme: 'red'    }
}

export const calculateNutritionTargets = (profile: UserProfile): NutritionTargets => {
  const heightInM = profile.height / 100
  const imc = parseFloat((profile.weight / (heightInM ** 2)).toFixed(1))

  let bmr = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age
  bmr += profile.gender === 'male' ? 5 : -161

  const activityFactors: Record<UserProfile['activityLevel'], number> = {
    sedentary:   1.2,
    light:       1.375,
    moderate:    1.55,
    active:      1.725,
    very_active: 1.9,
  }

  const tdee = Math.round(bmr * activityFactors[profile.activityLevel])
  const adjustments = { lose: -500, gain: 400, maintain: 0 }
  const rawCalories = tdee + adjustments[profile.goal]

  const minSafe = profile.gender === 'male' ? 1500 : 1200
  const calories = Math.max(minSafe, Math.round(rawCalories))

  const protein = Math.round(profile.weight * 2)
  const fats    = Math.max(50, Math.round(profile.weight))
  const carbs   = Math.max(50, Math.round((calories - protein * 4 - fats * 9) / 4))

  return { imc, bmr: Math.round(bmr), tdee, calories, protein, carbs, fats }
}

export const getProgressPercent = (value: number, target: number): number =>
  target > 0 ? Math.min(100, Math.round((value / target) * 100)) : 0