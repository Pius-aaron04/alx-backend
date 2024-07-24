#!/usr/bin/env python3
"""
Defines a cache system class.
"""

from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """
    Basic cache model.
    """

    def put(self, key, item):
        """
        puts item into cache storage
        """

        if key and item:
            self.cache_data[key] = item

    def get(self, key):
        """
        gets key's value from cache.
        """

        if key is None:
            return None
        return self.cache_data.get(key)
