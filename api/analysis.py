import numpy as np 
import pandas as pd
from cleaning_messages import get_data

# Get dataframe data
messages_df =  get_data()

# Main function, will return all dictionaries
def data_analysis():
    data = {}
    #data['total_messages'] = size
    return cute_words_count()

# Function to count the number of hearts
def cute_words_count():
    data_cute_words = {}
    # Count the number of we say "amo" in the chat
    loveyou = messages_df['messages'].str.contains('amo' , case= False)
    total_lovesyou = len(messages_df[loveyou])
    
    # Count the number of we say "quiero" and "tqm (te quiero mucho)" in the chat
    appreciateyou = messages_df['messages'].str.contains('te quiero| tqm' , case= False)
    total_appreciateyou = len(messages_df[appreciateyou])
    
    # Count the number of we say "bonit@" and in the chat
    pretty = messages_df['messages'].str.contains('bonita | bonito' , case= False)
    total_pretties = len(messages_df[pretty])

    
    # Count the number of we say "precios@" in the chat
    beatiful = messages_df['messages'].str.contains('preciosa | precioso' , case= False)
    total_beatiful = len(messages_df[beatiful])
    print(total_beatiful)
    
    data_cute_words['total_lovesyou'] = total_lovesyou
    data_cute_words['total_appreciateyou'] = total_appreciateyou
    data_cute_words['total_pretties'] = total_pretties
    data_cute_words['total_beatiful'] = total_beatiful
    return data_cute_words
    
if __name__ == "__main__":
    data_analysis()