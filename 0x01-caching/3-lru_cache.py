#!/usr/bin/env python3
"""
Cache model.
"""

from base_caching import BaseCaching


class LRUCache(BaseCaching):
    """
    LRU Cache Model
    """

    def __init__(self):
        """
        instantiates cache
        """

        super().__init__()

        self.accesses = []

    def put(self, key, item):
        """
        Puts item into Cache
        """

        if not any((key, item)):
            return
        if len(self.cache_data) >= self.MAX_ITEMS and key not in\
           self.cache_data:
            popped = self.accesses[0]
            self.cache_data.pop(popped)
            self.accesses.pop(0)
            print(f"DISCARD: {popped}")
        self.cache_data[key] = item
        if key not in self.accesses:
            self.accesses.append(key)
        else:
            self.accesses.pop(self.accesses.index(key))
            self.accesses.insert(len(self.accesses), key)

    def get(self, key):
        """
        Retrieves key's item from cache.
        """

        if key is None:
            return None
        if key not in self.accesses and key in self.cache_data:
            self.accesses.append(key)
        elif key in self.accesses:
            self.accesses.remove(key)
            self.accesses.insert(len(self.accesses), key)
        return self.cache_data.get(key)
