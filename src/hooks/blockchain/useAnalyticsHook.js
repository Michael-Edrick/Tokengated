import { NearContext } from "@/context";
import React, { useEffect, useState, useContext } from "react";
import { TOKEN_CONTRACT, PIKE_API, PIKE_API_KEY } from '@/config';

const useAnalyticsHook = () => {
  const getTransactionCount = async () => {
    try {
      const response = await fetch(
        `${PIKE_API}/account/tx-count/${TOKEN_CONTRACT}`,
        {
          method: "GET",
          headers: {
            "accept": "application/json",
            "x-api-key": PIKE_API_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Transaction count:", data);
      return data;
    } catch (error) {
      console.error("Error fetching transaction count:", error);
      return null;
    }
  };

  const getUniqueUsersCount = async () => {
    try {
        const response = await fetch(
            `${PIKE_API}/contract-analysis/unique-users-by-period/${TOKEN_CONTRACT}`,
            {
                method: "GET",
                headers: {
                    "accept": "application/json",
                    "x-api-key": PIKE_API_KEY,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Extract monthly data
        const monthlyData = data?.monthly?.data || [];

        // Calculate the sum of all "unique_users"
        const sumUniqueUsers = monthlyData.reduce((sum, entry) => {
            return sum + parseInt(entry.unique_users, 10);
        }, 0);

        console.log("Total sum of unique users:", sumUniqueUsers);
        return sumUniqueUsers;
    } catch (error) {
        console.error("Error fetching unique users count:", error);
        return null;
    }
  };


  return {
    getTransactionCount,
    getUniqueUsersCount,
  };
};

export default useAnalyticsHook;
