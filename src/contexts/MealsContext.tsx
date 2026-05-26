import type { Meal } from "@/types"
import { createContext, useContext, useMemo, type ReactNode } from "react"
import { useLocalStorage } from "./useLocalStorage"


interface MealContextProps {
    meals: Meal[]
    todayMeals: Meal[]
    addMeal: (meal: Meal) => void
    removeMeal: (meal: Meal) => void
}

const MealsContext = createContext<MealContextProps>({} as MealContextProps);

export const MealsProvider = ({ children }: { children: ReactNode }) => {
    const [meals, setMeals] = useLocalStorage('meals', []);

    const todayMeals = useMemo(() => {
        return meals.filter((meal: any) => new Date(meal.timestamp).toDateString() === new Date().toDateString())
    }, [meals])

    const addMeal = (meal: Meal) => {
        setMeals((prev: any) => [meal, ...prev])
    }

    const removeMeal = (meal: Meal) => {
        setMeals((prev: any) => prev.filter((m: any) => m.id !== meal.id))
    }

    return (
        <MealsContext.Provider value={{ meals, todayMeals, addMeal, removeMeal }}>
            {children}
        </MealsContext.Provider>
    )
}

export const useMeals = () => {
    const context = useContext(MealsContext);
    if (!context) {
        throw new Error('useMeals must be used within a MealsProvider');
    }
    return context;
}