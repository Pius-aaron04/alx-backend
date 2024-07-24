#!/usr/bin/env python3
"""
Cache model.
"""

from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """
    LIFO Cache Model
    """

    def __init__(self):
        """
        instantiates cache
        """

        super().__init__()

    def put(self, key, item):
        """
        Puts item into Cache
        """

        if key and item:
            if len(self.cache_data) >= self.MAX_ITEMS:
                popped = list(self.cache_data.keys())[-1]
                self.cache_data.pop(popped)
                print(f"DISCARD: {popped}")
            self.cache_data[key] = item

    def get(self, key):
        """
        Retrieves key's item from cache.
        """

        if key is None:
            return None
        return self.cache_date.get(key)
